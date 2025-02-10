import { useState } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"
import {useContext} from 'react'
import { UserContext } from './contexts/userContext.js'
function App() {
 
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar })
  
  
  return (
    <UserContext.Provider value ={user}>
      
      <Header/>
  
    </UserContext.Provider>
  )
}

export default App
