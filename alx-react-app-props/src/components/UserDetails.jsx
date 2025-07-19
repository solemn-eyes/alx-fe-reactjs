import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserDetails({ userData }) {
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
export default UserDetails;