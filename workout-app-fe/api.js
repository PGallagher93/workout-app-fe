import axios from "axios"

const fetchPremadeWorkouts = () => {
    return axios.get(`https://pg-workout-app.onrender.com/api/premades`)
}