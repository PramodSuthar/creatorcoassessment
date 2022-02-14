import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';

import './ApiCall.css'

function ApiCall() {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);
    const [lastElement, setLastElement] = useState(null);
    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNumber((pageNumber) => pageNumber + 1);
            }
        })
    );

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

    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    const handleScroll = (event) => {
        const options = { root: document.querySelector('.container') }

        const loadPage = () => setPageNumber(prev => prev + 1)
        var observer = new IntersectionObserver(loadPage, options)
        observer.observe(document.querySelector('.end'))

    };

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