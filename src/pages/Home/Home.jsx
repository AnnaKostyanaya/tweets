import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/user/user-operations";
import { getError, getIsLoading, currentStatus, getAllUsers } from "redux/user/user-selectors";
import { currentFilter } from "redux/filter/filter-selectors";
import { Link, useLocation } from "react-router-dom";
import Button from "components/Button"
import Dropdown from "components/Dropdown"
import { Image, ContentWrapper, Picture, List, Items, DropdownContainer, PictureContainer, Avatar, Card, TextName, TextContainer, TextTweet, TextFollowers } from './Home.styled';
import { Error, Btn} from '../User/User.styled';

const Home = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const [lastUser, setLastUser] = useState(3);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageTotal, setPageTotal] = useState(1);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    const getFilteredUsers = (users, filter, subscribedUsers) => {    
        if (!filter) {
            return users;
        }
        if (filter === "Show all") {
            return users;
        }
        if (filter === "Follow") {
            return users.filter(user => !subscribedUsers.includes(user.id));
        }
        if (filter === "Followings") {
            return users.filter(user => subscribedUsers.includes(user.id));
        }
    }

    const users = useSelector(getAllUsers);
    const subscribedUsers = useSelector(currentStatus)
    const filter = useSelector(currentFilter);
    const filterUsers = getFilteredUsers(users, filter, subscribedUsers);

    useEffect(() => {
        if (filterUsers) {
            setPageTotal(Math.ceil(filterUsers.length / 3));
        }
    }, [filterUsers]);
    
    useEffect(() => {
        setLastUser(pageNumber * 3);
    }, [pageNumber]);

    const handleIncrement = () => {
        setPageNumber(PrevNumber => PrevNumber + 1);
    }

    return (
    <ContentWrapper>
        <PictureContainer>
            <Image alt="Logo" />
            <Picture></Picture>
            {filterUsers &&
            <DropdownContainer>
                <Dropdown />
            </DropdownContainer>}
        </PictureContainer>
            {filterUsers && <List>
            {filterUsers.slice(0, lastUser).map(({id, avatar, tweets, followers, user}) => (
                <Card key={id}>
                    <Items>
                        <Link to={`tweets/${id}`} state={{ from: location }}>
                            <Avatar src={avatar} alt="avatar" />
                            <TextContainer>
                                <TextName>{user}</TextName>
                                <TextTweet >{tweets.toLocaleString('en-US')}<span> tweets</span></TextTweet>
                                <TextFollowers>{followers.toLocaleString('en-US')}<span> followers</span></TextFollowers>
                            </TextContainer>
                        </Link>
                    </Items>
                </Card>
                ))}
            </List>}
        {(filterUsers && filterUsers.length > 0 && pageNumber < pageTotal) &&
        <Btn><Button text="Load more" type="button" onClick={handleIncrement} /></Btn>}
        {(filterUsers && pageNumber === pageTotal && filterUsers.length > 0) &&
        <Error>You've reached the end of search results</Error>}
        {isLoading && !error && <Error>Loading...</Error>}
        {error && <Error>Error...{error.message}</Error>}
    </ContentWrapper>
    );
    };
    
    export default Home;