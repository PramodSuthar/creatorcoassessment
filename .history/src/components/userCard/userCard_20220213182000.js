import React from 'react';
// Styles
import { Wrapper } from './userCard.styles';

const userCard = ({ user }) => {
    return <Wrapper>
        <div>{user.cell}</div>;
        <div>{user.dob}</div>;
        <div>{user.email}</div>;
        <div>{user.email}</div>;

    </Wrapper>
}

export default userCard;
