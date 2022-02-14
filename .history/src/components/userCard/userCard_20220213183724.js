import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => <Wrapper>{user.email}</Wrapper>;

export default UserCard;
