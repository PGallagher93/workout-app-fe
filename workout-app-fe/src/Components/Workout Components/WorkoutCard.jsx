import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
//set current workout in local storagr or cookies?
const WorkoutCard = ({title, workout, setUser})=>{
const user = useContext(UserContext)
console.log(workout, "in card")
const handleAddCurrentWorkout = (e, user) => {
    
     setUser({
        ...user,
        currentWorkout:workout.workout_id
     })
    console.log(user, " in set")
}
return (
    <div className="bg-orange-400 min-h-20 w-25vw p-1 rounded-sm m-12">
    <span>{title}</span>
    <button onClick={(e) => {
        handleAddCurrentWorkout(e, user)
    }} >add</button>
    </div>
)
}

export default WorkoutCard