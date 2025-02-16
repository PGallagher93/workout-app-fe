import ContainerTile from "../Components/Workout Components/ContainerTile";

const MyWorkouts = ({ workouts }) => {
  console.log(workouts, "In myworkout page");
  return (
    <div className="pt-14 bg-zinc-800 h-screen">
      <h1>workouts</h1>
      <ul className="flex-col ">
        {workouts.map((workout) => {
          return (
            <ContainerTile
              key={workout.workout_id}
              title={workout.workout_name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MyWorkouts;
