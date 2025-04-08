import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <h1>parent </h1>
        <Child name={"maharajaa"} age={22} phone={45666}/>
        <Child name={"jeeva"} age={24} phone={4555566}/>
    </div>
  )
}

export default Parent