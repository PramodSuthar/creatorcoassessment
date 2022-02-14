import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';
import InfiniteScroll from 'react-infinite-scroller';


import './ApiCall.css'

function ApiCall(pageNumber) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastElement, setLastElement] = useState(null);


    const getUsers = async pageNumber => {
        const users = await (
            await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=12`)
        ).json();
        console.log(users.results);
        return users.results;
    };

    document.addEventListener("DOMContentLoaded", () => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25
        };

        function handleIntersect(entries, observer) {
            setPageNumber(pageNumber => pageNumber + 1)
        }

        let observer = new IntersectionObserver(handleIntersect,
            options);
        observer.observe(loader);
    })

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const newUsers = await getUsers(pageNumber);
            setUsers((prev) => [...prev, ...newUsers]);
            setLoading(false);
        };

        loadUsers();
    }, [pageNumber]);


    return (
        <div className='App'>
            <span className='users-grid'>
                <Content onScroll>
                    {users && users.map((user) =>
                        <UserCard key={user.cell} user={user} />)}
                </Content>
            </span>
            <div>{loading && <Loading />}</div>
        </div>

    );

}

export default ApiCall;