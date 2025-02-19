
import { useState } from "react"

const WorkoutStatsContainer = ({stats}) => {
  
    const [isEditable, setisEditable] = useState(false)

    const handleEdit = (e) => {
        setisEditable(true)
    }
    const handleSubmit = (e) => {
        setisEditable(false)
    }
    
    if (!isEditable){
return (
<div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12 flex flex-col ">
<span>Exercise: {stats.exercise_name}</span>
<span>Reps: {stats.reps}</span>
<span>sets: {stats.sets}</span>
<span>Weight: {stats.weight}</span>
<button onClick={(
    (e)=>{
        handleEdit(e)
    }
)}>Edit</button>
</div>)
}

if (isEditable){
    return (
        <div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12 flex flex-col ">
         <p>This is a form lol</p>
         <button onClick={((e) => {
            handleSubmit(e)
         })}>Submit</button>
         </div>
    )
}
}

export default WorkoutStatsContainer