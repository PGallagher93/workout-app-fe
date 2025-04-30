import { useState } from "react";
import { patchWorkoutWeightStat } from "../../../api";
import statsBackgroundImage from "../../images/statsBackgroundImage.jpg"

const WorkoutStatsContainer = ({ stats }) => {
  console.log(stats, "< stats ");
  const [isEditable, setisEditable] = useState(false);
  const [workoutStats, setWorkoutStats] = useState(stats);
  const [weightInput, setWeightInput] = useState(workoutStats.weight) //can i just change workoutstats state??
  const [weightPosted, setWeightPosted] = useState(false)
  const [isPosting, setIsPosting] = useState(false)
  const handleEdit = (e) => {
    setisEditable(true);
  };
  const handleSubmit = (e, workoutStat_id) => {
    e.preventDefault()
    console.log(workoutStat_id, "< id",typeof weightInput, "weight input")
    setWeightPosted(false)
    
    
    
    if(weightInput !== "" ) {
      const weightInputNumber = Number(weightInput)
      if(weightInputNumber < 1000){
      console.log("in posting")
      setIsPosting(true)
      patchWorkoutWeightStat(workoutStat_id, weightInputNumber)
        .then((res)=>{
          console.log(res.data.workoutStat.weight, "< ress data")
          const newWeight = res.data.workoutStat.weight
          setIsPosting(false)
          setWeightPosted(true)
          setWorkoutStats({...workoutStats,
                           weight:newWeight })  
          setisEditable(false)
        })
        .catch((err)=>{
          //will need to do some validation?? ie for user
          console.log(err, "< err")
        })
      }
    }
    // setisEditable(false);
  };
  const handleForm = (formData) => {
    console.log(formData, "<< form")
    const weight = formData.get("input")
    console.log(weight)
  }
 // when posting workout weight update the data will -have- to be an int
  const handleChange=(e)=>{
    
    setWeightInput(e.target.value.replace(/[^0-9]/g, ""))
    
    
  }
  if (!isEditable) {
    return (
      <article className="bg-[url('./images/statsBackgroundImage.jpg')] bg-cover bg-center min-h-20 w-25vw  rounded-sm my-12  ">
        <section className=" bg-black/50  font-bold flex flex-col backdrop-opacity-50 p-1">
        <span>Exercise: {workoutStats.exercise_name}</span>
        <span>Reps: {workoutStats.reps}</span>
        <span>sets: {workoutStats.sets}</span>
        <span>Weight: {workoutStats.weight}</span>
        <div className="bg-black text-white ">
        <button
          onClick={(e) => {
            handleEdit(e);
          }}
        >
          Edit
        </button>
        </div>
        </section>
      </article>
    );
  }

  if (isEditable) {
    return (
      <article className="bg-[url('./images/statsBackgroundImage.jpg')] bg-cover  bg-center min-h-20 w-25vw  rounded-sm my-12 ">
        <section className="  font-bold bg-black/50 flex flex-col backdrop-opacity-50 p-1 ">
        <span>Exercise: {workoutStats.exercise_name}</span>
        <span>Reps: {workoutStats.reps}</span>
        <span>sets: {workoutStats.sets}</span>
        
  
        <form>
            <input className="bg-black" name ="weight" type="text" onChange={(e) => {handleChange(e)}} value={weightInput}/>
            <button onClick={(e) =>{handleSubmit(e, workoutStats.stat_id)}}>add weight</button>
        </form>
        </section>
      </article>
    );
  }
};

export default WorkoutStatsContainer;
