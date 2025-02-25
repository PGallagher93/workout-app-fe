import { useState } from "react";

const WorkoutStatsContainer = ({ stats }) => {
  console.log(stats, "< stats ");
  const [isEditable, setisEditable] = useState(false);
  const [workoutStats, setWorkoutStats] = useState(stats);
  const [weightInput, setWeightInput] = useState(workoutStats.weight) //can i just change workoutstats state??
  
  const handleEdit = (e) => {
    setisEditable(true);
  };
  const handleSubmit = (e) => {
    setisEditable(false);
  };
  const handleForm = (formData) => {
    console.log(formData, "<< form")
    const weight = formData.get("input")
    console.log(weight)
  }
 // when posting workout weight update the data will -have- to be an int
  const handleChange=(e)=>{
    
    setWeightInput(e.target.value)
    
    
  }
  if (!isEditable) {
    return (
      <div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12 flex flex-col ">
        <span>Exercise: {workoutStats.exercise_name}</span>
        <span>Reps: {workoutStats.reps}</span>
        <span>sets: {workoutStats.sets}</span>
        <span>Weight: {workoutStats.weight}</span>
        <button
          onClick={(e) => {
            handleEdit(e);
          }}
        >
          Edit
        </button>
      </div>
    );
  }

  if (isEditable) {
    return (
      <div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12 flex flex-col ">
        <span>Exercise: {workoutStats.exercise_name}</span>
        <span>Reps: {workoutStats.reps}</span>
        <span>sets: {workoutStats.sets}</span>
        
  
        <form>
            <input name ="weight" type="text" onChange={(e) => {handleChange(e)}} value={weightInput}/>
            <button type="submit">add weight</button>
        </form>
      </div>
    );
  }
};

export default WorkoutStatsContainer;
