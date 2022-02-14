import React, { useState } from 'react';
// Styles
import { Wrapper } from './UserCard.styles';
import './UserCard'


const UserCard = ({ user }) => {
    const [showMore, setShowMore] = useState(false)

    return (
        <Wrapper >
            <div className="container">
                <article className='card'>
                    <img src={user.picture.medium} alt='name' />
                    <div>{user.name.title} {user.name.first} {user.name.last}</div>
                    <div>{user.gender}</div>
                    <button>ShowMore</button>
                </article>
            </div>
        </Wrapper >
    )
}

export default UserCard;
