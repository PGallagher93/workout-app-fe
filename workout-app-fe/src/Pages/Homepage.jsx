import ContainerTile from "../Components/ContainerTile"
const Homepage = () =>{
return (
      
       <div className="pt-14 bg-zinc-800 h-screen">
        <div className=" p-10 grid grid-cols-2 gap-4">
        <ContainerTile title="Current Workout"/>
        <ContainerTile title="My Workouts" />
        <ContainerTile title ="My Records"/>
        <ContainerTile title ="Create Workout"/>
        </div>
       </div>
    
)
}

export default Homepage
