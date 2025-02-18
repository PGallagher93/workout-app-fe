
const WorkoutStatsContainer = ({stats}) => {
    
return (
<div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12 flex flex-col ">
<span>Exercise: {stats.exercise_name}</span>
<span>Reps: {stats.reps}</span>
<span>sets: {stats.sets}</span>
<span>Weight: {stats.weight}</span>
</div>)
}

export default WorkoutStatsContainer