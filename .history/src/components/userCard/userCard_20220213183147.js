import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => {
    return (<div>
        <div>{user.cell}</div>;
        <div>{user.dob}</div>;
        <div>{user.email}</div>;
        <div>{user.email}</div>;

    </div>
    )
}

export default UserCard;
