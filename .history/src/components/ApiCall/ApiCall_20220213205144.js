import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';

import './ApiCall.css'

function ApiCall(pageNumber) {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);
    const [lastElement, setLastElement] = useState(null);


    const getUsers = async pageNumber => {
        const users = await (
            await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=12`)
        ).json();
        console.log(users.results);
        return users.results;
    };

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const newUsers = await getUsers(pageNumber);
            setUsers((prev) => [...prev, ...newUsers]);
            setLoading(false);
        };

        loadUsers();
    }, [pageNumber]);

    document.addEventListener("DOMContentLoaded", () => {
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: '100px'
        };

        function handleIntersect(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPageNumber(PageNumber => PageNumber + 1)
                }
            });
        }

        let observer = new IntersectionObserver(handleIntersect,
            options);
        observer.observe(loader);
    })
    return (
        <div className='App'>
            <span className='users-grid'>
                <Content onScroll={handleScroll}>
                    {users && users.map((user) => <UserCard key={user.cell} user={user} />)}
                </Content>
            </span>
            <div>{loading && <Loading />}</div>
        </div>

    );

}

export default ApiCall;