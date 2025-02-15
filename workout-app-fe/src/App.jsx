import { useState, useEffect } from 'react'
import Header from "./Components/Header/Header.jsx"
import './App.css'
import SpaceWolvesAvatar from "./Avatars/SpaceWolves.jpeg"
import {useContext} from 'react'
import { UserContext } from './contexts/userContext.js'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import { fetchUserWorkouts } from '../api.js'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})
  const [user, setUser] = useState({username:"Sigismund", userId: 1, avatar: SpaceWolvesAvatar, currentWorkout: null })
  const [workouts, setWorkouts] = useState({})

  useEffect(()=>{
    setIsLoading(true)
    fetchUserWorkouts(user.userId)
      .then((res) => {
        setIsLoading(false)
        setErrorMessage({})
        console.log(res.data, "< res.data")
      })
      .catch((err) => {
        setErrorMessage(err.response.data)
        console.log(err.resonse.data, "< error")
      })
  }, [])

  
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
