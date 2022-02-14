import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([])
    const [allusers, setAllUsers] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch("https://randomuser.me/api?page=" + pageNumber + "&results=12");
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }
            setUsers(userData.results);
            setAllUsers(userData.results);
        })();
    }, []);
    return (
        <div className='App' >
            <div className="cards-container">
                {users.map((user, index) => (
                    <SocialCard key={index} userData={user} />
                ))}
            </div>
        </div >
    )
}

export default ApiCall;