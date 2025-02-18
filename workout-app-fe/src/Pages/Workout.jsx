import { useParams } from "react-router-dom"
import { fetchSingleWorkout } from "../../api"
import { useEffect, useState } from "react"
const Workout = ({setIsLoading, setErrorMessage}) =>{

    const {id} = useParams()
    const [workout, setWorkout] = useState({})
    console.log(id)
    useEffect(()=> {
        setIsLoading(true)
        fetchSingleWorkout(id)
            .then((res)=>{
                console.log(res.data.workout, "< res in Workout")
                setIsLoading(false)
                setWorkout(res.data.workout)
                console.log(workout, "<use state")
            })
            .catch((err) => {
                setErrorMessage(err)
                console.log(err, "< error in workout component")
            })

    }, [])


    return (
        <div className="pt-14 bg-zinc-800 h-screen">

        </div>
    )
}

export default Workout