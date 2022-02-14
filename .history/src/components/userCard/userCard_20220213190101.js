import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';
import './UserCard'


const UserCard = ({ user }) => {
    const [isSignup, setIsSignup] = useState(true)

    return
    <Wrapper >
        <div className="container">
            <article className='card'>
                <img src={user.picture.medium} alt='name' />
                <div>{user.name.title} {user.name.first} {user.name.last}</div>
                <div>{user.gender}</div>
                <div></div>
            </article>
        </div>
    </Wrapper >

}

export default UserCard;
