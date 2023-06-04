import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/user/user-operations";
import { getError, getIsLoading, currentStatus, getAllUsers } from "redux/user/user-selectors";
import { currentFilter } from "redux/filter/filter-selectors";
import { Link, useLocation } from "react-router-dom";
import Button from "components/Button"
import Dropdown from "components/Dropdown"
import { Image, ContentWrapper, MainContainer } from './Home.styled';

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
        <Image alt="Logo" />
        <MainContainer>
            {filterUsers && 
            <>
                <Dropdown />
                <ul>
                {filterUsers.slice(0, lastUser).map(({id, avatar, tweets, followers, user}) => (
                    <li key={id}>
                        <Link to={`tweets/${id}`} state={{ from: location }}>
                            <img src={avatar} alt="avatar" />
                            <p>{user}</p>
                            <p>{tweets.toLocaleString('en-US')}<span>tweets</span></p>
                            <p>{followers.toLocaleString('en-US')}<span>followers</span></p>
                        </Link>
                    </li>
                    ))}
                </ul>
            </>}
            {(filterUsers && filterUsers.length > 0 && pageNumber < pageTotal) &&
            <Button text="Load more" type="button" onClick={handleIncrement} />}
            {(filterUsers && pageNumber === pageTotal && filterUsers.length > 0) &&
            <p>You've reached the end of search results.</p>}
            {isLoading && !error && <p>Request in progress...</p>}
        </MainContainer>
    </ContentWrapper>
    );
    };
    
    export default Home;