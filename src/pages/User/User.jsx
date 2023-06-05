import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersById, changeFollowerCount } from "redux/user/user-operations";
import { currentUser, getError, getIsLoading, currentStatus } from "redux/user/user-selectors";
import { toggleUserSubscription } from "redux/user/user-slice";
import Button from "components/Button/Button";
import { Container, Image, ContentWrapper, MainContainer, AvatarContainer, Avatar, LinkToBack, Line, TextTweet, TextFollowers, TextContainer, Btn, Error } from './User.styled';

const User = () => {
    const current = useSelector(currentUser);
    const status = useSelector(currentStatus);
    const { id } = useParams();
    const isUserSubscribed = status.includes(id);

    const dispatch = useDispatch();
    const location = useLocation();
    const from = location.state?.from || "/";
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);


    useEffect(() => {
        dispatch(fetchUsersById(id));
    }, [id, dispatch]);

    const onClick = () => {
        if (isUserSubscribed) {
            const newCurrent = { ...current, followers: current.followers - 1};
            dispatch(changeFollowerCount(newCurrent));
        } else {
            const newCurrent = { ...current, followers: current.followers + 1};
            dispatch(changeFollowerCount(newCurrent));
        }
        dispatch(toggleUserSubscription(id));
    };

    const buttonText = isUserSubscribed ? 'Following' : 'Follow'

    return (
        <Container>
        <ContentWrapper> 
            <Image alt="Logo" />
            <MainContainer>
                {current && (
                <>
                    <Link to={from}><LinkToBack>Back to users</LinkToBack></Link>
                    <AvatarContainer>
                        <Avatar src={current.avatar} alt="avatar" />
                    </AvatarContainer>
                    <Line></Line>
                    <TextContainer>
                        <TextTweet>{current.tweets.toLocaleString('en-US')}<span> tweets</span></TextTweet>
                        <TextFollowers>{current.followers.toLocaleString('en-US')}<span> followers</span></TextFollowers>
                    </TextContainer>
                    <Btn>
                        <Button type="button" text={buttonText} onClick={onClick} />    
                    </Btn>
                </>)}
                {isLoading && (<Error>Loading...</Error>)}
                {error && (<Error>Error...{error.message}</Error>)}
            </MainContainer>
        </ContentWrapper>
        </Container>
    )
};

export default User;

