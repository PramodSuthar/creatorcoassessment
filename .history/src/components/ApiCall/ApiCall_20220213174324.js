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

        fetch('https://randomuser.me/api?page=${pageNumber}&results=12")
                

            setUsers(userData.results);
        setAllUsers(userData.results);
        console.log(users);
    })();
}, [pageNumber]);
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