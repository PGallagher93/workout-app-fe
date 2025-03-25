import { useState, useEffect } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"
import BloodAngelsAvatar from "./Avatars/BloodAngels.jpeg"
import DarkAngelsAvatar from "./Avatars/DarkAngels.jpeg"
import DeathGuardAvatar from "./Avatars/DeathGuard.jpeg"
import IronWarriorsAvatar from "./Avatars/IronWarriors.jpeg"
import NightLordsAvatar from "./Avatars/NightLords.jpeg"
import UltramarinesAvatar from "./Avatars/Ultramarines.jpeg"
import WordBearersAvatar from "./Avatars/WordBearers.jpeg"
import {useContext} from 'react'
import { UserContext } from './contexts/userContext.js'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import MyWorkouts from './Pages/MyWorkouts.jsx'
import { fetchUserWorkouts } from '../api.js'
import Workout from './Pages/Workout.jsx'
import Login from './Pages/Login.jsx'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar, currentWorkout: null })
  const [workouts, setWorkouts] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetchUserWorkouts(user.userId)
      .then((res) => {
        setIsLoading(false)
        setErrorMessage({})
        setWorkouts(res.data.workouts)
      })
      .catch((err) => {
        setErrorMessage(err)
        console.log(err, "< error")
      })
  }, [])
 console.log(workouts, "in app")
  
  return (
    <UserContext.Provider value ={user}>

      <Header/>
      <Routes>
        <Route path="/" element={<Homepage workouts={workouts}/>}></Route>
        <Route path="/MyWorkouts" element={<MyWorkouts workouts={workouts} setUser={setUser} />}></Route>
        <Route path="/Workout/:id" element={<Workout setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} isLoading={isLoading}/>}></Route>
        <Route path="/login" element={<Login setErrorMessage={setErrorMessage} setUser={setUser} user={user} />}></Route>
      </Routes>
  
    </UserContext.Provider>
  )
}

export default App
