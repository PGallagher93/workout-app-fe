import LoadingContainer from "../Components/loading Components/LoadingContainer";
import WorkoutCard from "../Components/Workout Components/WorkoutCard";
import PageContainer from "../Components/Basic Components/PageContainer";
import { Link } from "react-router-dom";
const MyWorkouts = ({ workouts, setUser, isLoading }) => {
  if(isLoading){
    return (
      <LoadingContainer/>
    )
  }
  return (
    //create a div component to avoid repeating
    <PageContainer>
      <h1 className="text-white">workouts</h1>
      <ul className="flex-col ">
        {workouts.map((workout) => {
          console.log(workout, "< in myworkout")
          
          return (
            <Link to={`/Workout/${workout.workout_id}`} key={workout.workout_id}>
            <WorkoutCard
              key={workout.workout_id}
              title={workout.workout_name}
              workout={workout}
              setUser={setUser}
              
            />
            </Link>
          );
        })}
      </ul>
    </PageContainer>
  );
};

export default MyWorkouts;
