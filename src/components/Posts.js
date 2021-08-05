import React, { useState, useEffect } from 'react'

const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPost(data)
    }


    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {
                    post.map((item) => (
                       <li key={item.id}>UserId: {item.userId} | Title: {item.title}</li> 
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts
