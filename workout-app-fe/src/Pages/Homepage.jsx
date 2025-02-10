import ContainerTile from "../Components/ContainerTile"
const Homepage = () =>{
return (
      
       <div className="pt-14 bg-zinc-800 h-screen">
        <div className=" p-10 grid grid-rows-2 grid-cols-2 gap-4">
        <ContainerTile/>
        <ContainerTile/>
        <ContainerTile/>
        <ContainerTile/>
        </div>
       </div>
    
)
}

export default Homepage
