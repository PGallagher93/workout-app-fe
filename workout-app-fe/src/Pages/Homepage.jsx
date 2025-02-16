import ContainerTile from "../Components/Workout Components/ContainerTile";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Homepage = (workouts) => {
  const user = useContext(UserContext);
  console.log(workouts, " workout in home");
  return (
    <div className="pt-14 bg-zinc-800 h-screen">
      <div className=" p-10 flex-col justify-between">
        <Link to={user.currentWorkout ? "/CurrentWorkout" : "/MyWorkouts"}>
          <ContainerTile
            title={
              user.currentWorkout ? "Current Workout" : "Add Current Workout"
            }
          />
        </Link>
        <Link to={"/MyWorkouts"}>
          <ContainerTile title="My Workouts" />
        </Link>
        <ContainerTile title="My Records" />
        <ContainerTile title="Create Workout" />
      </div>
    </div>
  );
};

export default Homepage;
