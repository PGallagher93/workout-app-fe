import { useParams } from "react-router-dom"
import { fetchSingleWorkout } from "../../api"
import { useEffect, useState } from "react"
import WorkoutStatsContainer from "../Components/Workout Components/WorkoutStatsContainer"
const Workout = ({setIsLoading, setErrorMessage, isLoading}) =>{

    const {id} = useParams()
    const [workout, setWorkout] = useState([])
    const [session, setSession] = useState(1)
    const [sessionAmount, setSessionAmount] = useState(1)
    
    console.log(id)
    useEffect(()=> {
        setIsLoading(true)
        fetchSingleWorkout(id)
            .then((res)=>{
                console.log(res.data.workout, "< res in Workout")
                setIsLoading(false)
                setWorkout(res.data.workout)
                res.data.workout.forEach((stats)=>{
                    console.log(stats, "< in foreac")
                    if(stats.session >= sessionAmount){
                        console.log("its higher")
                        setSessionAmount(stats.session)
                    }
                })
                })
            .catch((err) => {
                setErrorMessage(err)
                console.log(err, "< error in workout component")
            })

    }, [])
    
 console.log(workout, "< out of effect")
 const handleNextSession = (e) => {
    setSession(session + 1)
    console.log("ive been pressed", sessionAmount,"= session amount", session, "= session")
           if(session < sessionAmount){
        //    setSession(session+1)
           console.log(session, "im inside")}
 }
 const handlePreviousSession = (e) => {
    setSession(session - 1)
 }

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
                
                if(stats.session === session){
                   
                    return <WorkoutStatsContainer key ={stats.stat_id} stats={stats}/>
                }
            })}
         </ul>
         {session > 1 ? <button onClick={(e) => {
            handlePreviousSession(e)
         }}>Previous Session</button> : <></>}
         {session < sessionAmount ? <button onClick={(e) =>{
              handleNextSession(e)
         }}>Next Session</button> : <></>}
        
         
        </div>
    )}
}

export default Workout