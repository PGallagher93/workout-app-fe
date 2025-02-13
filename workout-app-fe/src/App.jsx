import { useState } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"
import {useContext} from 'react'
import { UserContext } from './contexts/userContext.js'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar, currentWorkout: null })
  const [workouts, setWorkouts] = useState({})
  
  return (
    <UserContext.Provider value ={user}>

      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
  
    </UserContext.Provider>
  )
}

export default App
