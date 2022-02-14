import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';

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
                    {users && users.map((user) => return{
                        <Wrapper >
                            <div className="container">
                                <article className='card'>
                                    <div onClick={switchMode}>
                                        <img className='card-img' src={user.picture.medium} alt='name' />
                                        <div>{user.name.first} {user.name.last}</div>
                                    </div>
                                    <div >{showMore && (
                                        <div>
                                            <p>Gender: {user.gender}</p>
                                            <p>location: {user.location.country}</p>
                                            <p>Email: {user.email}</p>
                                            <p>Age: {user.dob.age}</p>
                                            <p>Phone: {user.phone}</p>
                                            <p>Registered Date: {RegistrationDate}</p>
                                        </div>
                                    )}</div>
                                </article>

                            </div>
                        </Wrapper >
                                    }
                    // <UserCard key={user.cell} user={user} />)}
            </Content>
        </span>
        <div>{loading && <Loading />}</div>
        </div >

    );

}

export default ApiCall;