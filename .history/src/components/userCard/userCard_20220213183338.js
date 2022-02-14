import React from 'react';
// Styles
import { Wrapper } from './UserCard.styles';

const UserCard = ({ user }) => <Wrapper>{user.email}{user.dob}</Wrapper>;

export default UserCard;
