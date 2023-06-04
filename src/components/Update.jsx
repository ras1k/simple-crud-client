import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user)
    }
    return (
        <div>
            <h3>{loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /> 
                <br /> <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;