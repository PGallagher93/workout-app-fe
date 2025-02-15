import ContainerTile from "../Components/ContainerTile"
import { UserContext } from "../contexts/userContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
const Homepage = (workouts) =>{
       const user = useContext(UserContext)
       console.log(workouts, " workout in home")
return (
      
       <div className="pt-14 bg-zinc-800 h-screen">
        <div className=" p-10 grid grid-cols-2 gap-4">
        <ContainerTile title={ user.currentWorkout ? "Current Workout" : "Add Current Workout"}/>
        <Link to={"/MyWorkouts"}>
        <ContainerTile title="My Workouts" />
        </Link>
        <ContainerTile title ="My Records"/>
        <ContainerTile title ="Create Workout"/>
        </div>
       </div>
    
)
}

export default Homepage
