import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';

import './ApiCall.css'
import LoadingAnim from '../LoadingAnimation/LoadingAnim';

function ApiCall() {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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


    return (
        <div className='App'>
            <span className='users-grid'>
                <div >
                    {users && users.map((user) =>
                        <div ref={lastBookElementRef}>
                            <UserCard key={user.cell} user={user} />
                        </div>)}
                </div>
            </span>
            <div>{loading && <LoadingAnim />}</div>
        </div>

    );

}

export default ApiCall;