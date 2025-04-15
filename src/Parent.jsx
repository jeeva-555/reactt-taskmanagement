import React from 'react'
import Child from './Child'
import { useEffect } from 'react';

function Parent(props) {
  useEffect(()=>{
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

/* { status: 'ok', method: 'GET' } */
  })
  return (
    <div>
        <h1>parent </h1>
        <Child name={"maharajaa"} age={22} phone={45666}/>
        <Child name={"jeeva"} age={24} phone={4555566}/>
        <h1>name {props.name}
            </h1>
         <h2>age</h2>   
        <h3>num</h3>


    </div>
    
  )
}

export default Parent