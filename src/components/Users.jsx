import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const users = useLoaderData()

    const handleDeleteUser = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                alert('Deleted Successfully')
            }
        })
    }
    return (
        <div>
            <p>{users.length}</p>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name} <button
                    onClick={()=>handleDeleteUser(user._id)}
                    >X</button></p>)
                }
            </div>

            <Link to="/">Home</Link>
        </div>
    );
};

export default Users;