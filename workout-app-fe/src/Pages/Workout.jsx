import { useParams } from "react-router-dom"
const Workout = () =>{

    const {id} = useParams()
    console.log(id)
    return (
        <div className="pt-14 bg-zinc-800 h-screen">

        </div>
    )
}

export default Workout