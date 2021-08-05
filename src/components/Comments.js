import React, { useState, useEffect } from 'react'

const Comments = () => {

    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComments()
    }, [])

    const getComments = async () => {
       const response = await fetch ('http://jsonplaceholder.typicode.com/comments')
       const data = await response.json()
       setComment(data)
    }



    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {
                    comment.map(item => (
                       <li key={item.id}>Name: {item.name} | Email: {item.email}</li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Comments;
