import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => <Wrapper> <div className="container">
    {user.email}
</div></Wrapper>;

export default UserCard;
