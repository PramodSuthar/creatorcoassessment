import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => <Wrapper> <div className="container">
    <div>{user.email}</div>
    <div>{user.gender}</div>
</div></Wrapper>;

export default UserCard;
