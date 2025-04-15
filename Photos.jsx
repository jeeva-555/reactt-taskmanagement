import React, { useState } from 'react'
import { useEffect } from 'react'

function Photos() {

    const [data,setdata]=useState([]);
    const[posts,setposts]=useState([]);
    useEffect(()=>{
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => response.json())
        .then(json => setdata(json))
    
    /* { status: 'ok', method: 'GET' } */
      },[])

      useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(json=>setposts(json.posts));
        // https://dummyjson.com/image/SIZE
        fetch('https://dummyjson.com/image/150')
        .then(response => response.blob()) // Convert response to blob
        .then(blob => {
        console.log('Fetched image blob:', blob);
        })
// Blob {size: SIZE, type: 'image/png'}
      },[])
  return (
    <div>
        {data.map((val,ind)=>{
            return(
                <div key={ind}>
                    <h2>name:{val.name}</h2>
                    <h3>email:{val.email}</h3>
                </div>
            )
        })}

        <div>
            {posts.map((post,ind)=>{
                return(
                    <div key={post.id}>
                        <p>{post.body}</p>
                        <p>{post.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Photos