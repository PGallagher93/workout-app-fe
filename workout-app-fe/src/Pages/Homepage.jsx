import ContainerTile from "../Components/ContainerTile"
import { UserContext } from "../contexts/userContext"
import { useContext } from "react"
const Homepage = () =>{
       const user = useContext(UserContext)
       
return (
      
       <div className="pt-14 bg-zinc-800 h-screen">
        <div className=" p-10 grid grid-cols-2 gap-4">
        <ContainerTile title={ user.currentWorkout ? "Current Workout" : "Add Current Workout"}/>
        <ContainerTile title="My Workouts" />
        <ContainerTile title ="My Records"/>
        <ContainerTile title ="Create Workout"/>
        </div>
       </div>
    
)
}

export default Homepage
