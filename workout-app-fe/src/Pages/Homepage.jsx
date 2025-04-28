import ContainerTile from "../Components/Workout Components/ContainerTile";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../Components/Basic Components/PageContainer";
const Homepage = (workouts) => {
  const user = useContext(UserContext);
  console.log(user, " homepage user")
  console.log(workouts, " workout in home");
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Homepage;
