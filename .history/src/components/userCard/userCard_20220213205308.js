import React, { useState } from 'react';
// Styles
import { Wrapper } from './UserCard.styles';
import './UserCard.css'


const UserCard = ({ user }) => {
    const [showMore, setShowMore] = useState(false)


    const switchMode = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    }
    const RegistrationDate = user.registered.date.substr(0, 10)



    return (
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
            <div className='loader'></div>
        </Wrapper >
    )
}

export default UserCard;
