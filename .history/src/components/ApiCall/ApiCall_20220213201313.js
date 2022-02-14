import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';

import './ApiCall.css'

function ApiCall() {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const ref = useRef(null);


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

    const isBottomVisible = useIntersectionObserver(
        ref,
        {
            threshold: 0 //trigger event as soon as the element is in the viewport.
        },
        false // don't remove the observer after intersected.
    );

    const handleScroll = (event) => {
        const options = { root: document.querySelector('.container') }

        const loadPage = () => setPageNumber(prev => prev + 1)
        var observer = new IntersectionObserver(loadPage, options)
        observer.observe(document.querySelector('.end'))

    };
    useEffect(() => {
        //load next page when bottom is visible
        isBottomVisible && setCount(count + 1);
    }, [isBottomVisible]);

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