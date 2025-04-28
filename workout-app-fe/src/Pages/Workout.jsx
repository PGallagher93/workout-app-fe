import { useParams } from "react-router-dom"
import { fetchSingleWorkout } from "../../api"
import { useEffect, useState } from "react"
import PageContainer from "../Components/Basic Components/PageContainer"
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
                
                setIsLoading(false)
                setWorkout(res.data.workout)
                res.data.workout.forEach((stats)=>{
                    
                    if(stats.session >= sessionAmount){
                        
                        setSessionAmount(stats.session)
                    }
                })
                })
            .catch((err) => {
                setErrorMessage(err)
                console.log(err, "< error in workout component")
            })

    }, [])
    

 const handleNextSession = (e) => {
    setSession(session + 1)
    
          
 }//shouldnt this just be pagination?
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
        <PageContainer>
            
         <ul>
            {workout.map((stats) => {
                
                if(stats.session === session){
                   
                    return <WorkoutStatsContainer key ={stats.stat_id} stats={stats}/>
                }
            })}
         </ul>
         <div className="flex pb-10 ">
         {session > 1 ? <button className="text-5xl cursor-pointer" onClick={(e) => {
            handlePreviousSession(e)
         }}>&lt;</button> : <button className="text-5xl text-black  text-end ">&gt;</button>}
         <span className="text-center flex-1">Session: {session}</span>
         {session < sessionAmount ? <button className="text-5xl cursor-pointer text-end" onClick={(e) =>{
              handleNextSession(e)
         }}>&gt;</button> : <button className="text-5xl text-black  text-end ">&gt;</button>}
         </div>
        
         
        </PageContainer>
    )}
}

export default Workout