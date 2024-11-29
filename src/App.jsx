import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleclick(){
    fetch("https://official-joke-api.appspot.com/random_joke").then((datas)=>datas.json()).then((finaldata)=> setCount(finaldata))
  }
useEffect(()=>{
  handleclick()
},[])
  return (
    <>
      <div style={{backgroundColor:"black", color:"white", padding:"10px"}}>
        <p>{count.type}</p>
        <p>{count.setup}</p>
        <p>{count.punchline}</p>
        <button onClick={handleclick}>Get another joke</button>
        
       

      </div>
     
    </>
  )
}

export default App
