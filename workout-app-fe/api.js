import axios from 'axios'

const fetchPremadeWorkouts = () => {
    return axios.get(`https://pg-workout-app.onrender.com/api/premades`)
}

const fetchUserWorkouts = (id) =>{
    return axios.get(`https://pg-workout-app.onrender.com/api/workouts/${id}`)
}

export {fetchPremadeWorkouts, fetchUserWorkouts}