import React, { useState } from 'react';
// Styles
import { Wrapper } from './UserCard.styles';
import './UserCard'


const UserCard = ({ user }) => {
    const [showMore, setShowMore] = useState(false)

    const switchMode = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    }
    return (
        <Wrapper >
            <div className="container">
                <article className='card'>
                    <divonClick={switchMode}>
                    <img onClick={switchMode} src={user.picture.medium} alt='name' />
                    <div>{user.name.title} {user.name.first} {user.name.last}</div>
                </divonClick=>
                <button onClick={switchMode}>{!showMore ? "Show More" : "Show More"}</button>
                <div >{showMore && (
                    <div>
                        <p>Gender: {user.gender}</p>
                        <p>location: {user.location.country}</p>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.dob.age}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Registered Date: {user.registered.date}</p>
                    </div>
                )}</div>
            </article>
        </div>
        </Wrapper >
    )
}

export default UserCard;
