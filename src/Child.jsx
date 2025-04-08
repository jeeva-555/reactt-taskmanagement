import React from 'react'

function Child({name,age,phone}) {
  
  return (
    <div>
        <div>
          <hr />
            <h1>user : {name}</h1>
            <p>age :{age}</p>
            <p>phone no :{phone}</p>
            <hr />
        </div>
    </div>
  )
}

export default Child