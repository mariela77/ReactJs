import React, { Fragment, useEffect, useState } from 'react';

const Users = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers()

    }, [])

    const getUsers = async () => {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUser(data)

    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    user.map(item => (
                        <li key={item.id}>Name : {item.name} | Email : {item.email}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Users;