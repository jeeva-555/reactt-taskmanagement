import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Section from './Section'
import Parent from './Parent'
import Com from './Com'
import Cards from './Cards'
import Photos from '../Photos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Photos/>
    </>

  )
}

export default App
