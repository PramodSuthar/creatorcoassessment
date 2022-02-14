import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => <Wrapper>
    <div className="container">
        <img src={user.picture.medium} />
        <div>{user.name.title} {user.name.first} {user.name.last}</div>
        <div>{user.gender}</div>
        <div></div>
    </div></Wrapper>;

export default UserCard;
