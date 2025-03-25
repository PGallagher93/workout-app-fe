import { useState } from "react"
import { postUserLogin } from "../../../api"

const LoginForm = ({setUser, user}) => {
    
    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [loginPosted, setLoginPosted] = useState(false)
    const [isPosting, setIsPosting] = useState(false)

   const handleUsernameChange=(e) => {
    setUsernameInput(e.target.value)
    console.log(usernameInput)
   }

   const handlePasswordChange=(e) => {
    setPasswordInput(e.target.value)
    console.log(passwordInput)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit this!")
    setIsPosting(true)
    postUserLogin(usernameInput, passwordInput)
        .then((res)=>{
            console.log(res.data.userDetails)
            const userDetails = res.data.userDetails
            setUser({...user,
                     username:userDetails.displayName,
                    userId:userDetails.userId,
                    avatar:userDetails.avatar,
                    currentWorkout:null})
            
        })
        .catch((err) => {
            console.log(err, "< error")
        })

   }

    return(
        <div>
            <form>
                <input name="username" type="text" onChange={(e)=>{handleUsernameChange(e)}}></input>
                <br/>
                <input name="password" type="password" onChange={(e)=>{handlePasswordChange(e)}}></input>
                <button onClick={(e)=> {handleSubmit(e)}}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm