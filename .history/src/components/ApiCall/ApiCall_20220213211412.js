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
    const loader = document.getElementsByClassName("loading");

    const observer = useRef()
    const lastBookElementRef = useCallback(node => { //useCallback to initiate a Callback function attached to the useRef 
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])

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
                    setPageNumber(pageNumber => pageNumber + 1)
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
                <Content onScroll={lastBookElementRef}>
                    {users && users.map((user) =>
                        <UserCard key={user.cell} user={user} />)}
                </Content>
            </span>
            <div>{loading && <Loading />}</div>
        </div>

    );

}

export default ApiCall;