import { useParams } from "react-router-dom"
import { fetchSingleWorkout } from "../../api"
import { useEffect, useState } from "react"
import WorkoutStatsContainer from "../Components/Workout Components/WorkoutStatsContainer"
const Workout = ({setIsLoading, setErrorMessage, isLoading}) =>{

    const {id} = useParams()
    const [workout, setWorkout] = useState([])
    const [session, setSession] = useState(1)
    console.log(id)
    useEffect(()=> {
        setIsLoading(true)
        fetchSingleWorkout(id)
            .then((res)=>{
                console.log(res.data.workout, "< res in Workout")
                setIsLoading(false)
                setWorkout(res.data.workout)
                console.log(workout, "<use state")
            })
            .catch((err) => {
                setErrorMessage(err)
                console.log(err, "< error in workout component")
            })

    }, [])
 console.log(workout, "< out of effect")

   if(isLoading) {
    return(
        <div>
            <span>Loading...</span>
        </div>
    )
   }

    else if (workout) {
        return (
        <div className="pt-14 bg-zinc-800 h-screen">
            
         <ul>
            {workout.map((stats) => {
                console.log(stats)
                if(stats.session === session){
                    console.log(stats, "< in map")
                    return <WorkoutStatsContainer/>
                }
            })}
         </ul>
        </div>
    )}
}

export default Workout