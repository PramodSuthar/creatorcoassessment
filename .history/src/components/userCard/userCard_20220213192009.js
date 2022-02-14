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
                    <img src={user.picture.medium} alt='name' />
                    <div>{user.name.title} {user.name.first} {user.name.last}</div>
                    <div>{user.gender}</div>
                    <button onClick={switchMode}>{!showMore ? "Sign More" : "Sign Less"}</button>
                    <div>{showMore && (
                        <div>
                            <div>Gender: {user.gender}</div>
                            <div>location: {user.location.country}</div>
                            <div>Email: {user.email}</div>
                            {/* <div>Age: {user.dob.age}</div> */}
                            <div>Phone: {user.phone}</div>
                            {/* <div>Registered Date: {user.registered.date}</div> */}

                        </div>
                    )}</div>
                </article>
            </div>
        </Wrapper >
    )
}

export default UserCard;
