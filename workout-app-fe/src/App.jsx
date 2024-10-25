import { useState } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"

function App() {
 
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar })
  return (
    <>
      <Header user = {user}/>
     
    </>
  )
}

export default App
