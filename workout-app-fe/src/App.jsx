import { useState } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"
import {useContext} from 'react'
import { UserContext } from './contexts/userContext.js'
import { Route, Routes } from 'react-router-dom'
function App() {
 
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar })
  
  
  return (
    <UserContext.Provider value ={user}>

      <Header/>
      <Routes>
        <Route path="/" element={}></Route>
      </Routes>
  
    </UserContext.Provider>
  )
}

export default App
