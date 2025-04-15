import React from 'react'

function Cards() {


  const users = [{name:"maharajaa",age:22,phone:84884844},
                {name:"jeeva",age:24,phone:73767454}
  ]

  return (

    users.map((user,ind)=>{
        return(
            <div key={ind}>
        <h1>user :{user.name}</h1>
        <p>age :{user.age}</p>
        <p>phone : {user.phone}</p>
    </div>
        )
    })
    
  )
}

export default Cards