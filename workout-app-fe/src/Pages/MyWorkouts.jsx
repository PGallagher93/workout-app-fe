import WorkoutCard from "../Components/Workout Components/WorkoutCard";

const MyWorkouts = ({ workouts, setUser }) => {
  console.log(setUser, "In myworkout page");
  return (
    <div className="pt-14 bg-zinc-800 h-screen">
      <h1>workouts</h1>
      <ul className="flex-col ">
        {workouts.map((workout) => {
          console.log(workout, "< in myworkout")
          return (
            <WorkoutCard
              key={workout.workout_id}
              title={workout.workout_name}
              workout={workout}
              setUser={setUser}
              
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MyWorkouts;
