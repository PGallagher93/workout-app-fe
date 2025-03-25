import { useState } from "react"
import { postUserLogin } from "../../../api"

const LoginForm = () => {

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
    setIsPosting(true)
    postUserLogin(usernameInput, passwordInput)
        .then((res)=>{
            console.log(res.data)
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
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm