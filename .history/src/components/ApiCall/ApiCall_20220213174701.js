import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';
import userCard from '../userCard/userCard';

function ApiCall() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([])
    const [allusers, setAllUsers] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        fetch(`https://randomuser.me/api?page=${pageNumber}&results=12`)
            .then(res => res.json)
            .then(json => setUsers([...users, ...json.data.results]))
    }, [pageNumber]);

    const scrollToEnd = () => {
        setPageNumber(pageNumber + 1)
    }

    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            scrollToEnd();
        }
    }
    return (
        <div>{
            users.map((user, index) => {
                return ((
                    <div>
                        <div  >{user.gender}</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                ))
            })
        }
        </div>

    )

}

export default ApiCall;