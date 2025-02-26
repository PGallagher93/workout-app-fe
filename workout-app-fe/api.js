import axios from 'axios'

const fetchPremadeWorkouts = () => {
    return axios.get(`https://pg-workout-app.onrender.com/api/premades`)
}

const fetchUserWorkouts = (id) =>{
    return axios.get(`https://pg-workout-app.onrender.com/api/workouts/${id}`)
}

const fetchSingleWorkout = (id) => {
    return axios.get(`https://pg-workout-app.onrender.com/api/user/workouts/${id}`)
}

const patchWorkoutWeightStat = (stat_id, weight) =>{
    return axios.patch(`https://pg-workout-app.onrender.com/api/user/workouts/workout_stats`,
    {stat_id: stat_id, weight: weight})
}

export {fetchPremadeWorkouts, fetchUserWorkouts, fetchSingleWorkout, patchWorkoutWeightStat}