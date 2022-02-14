import React from 'react';
// Styles
import { Wrapper } from './User.styles';

const User = ({ user }) => {
    return <Wrapper>
        <div>{user.cell}</div>;
        <div>{user.dob}</div>;
        <div>{user.email}</div>;
        <div>{user.email}</div>;

    </Wrapper>
}

export default User;
