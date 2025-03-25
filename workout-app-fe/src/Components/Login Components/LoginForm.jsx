import { useState } from "react"

const LoginForm = () => {

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

   const handleUsernameChange=(e) => {
    setUsernameInput(e.target.value)
   }

   const handlePasswordChange=(e) => {
    setPasswordInput(e.target.value)
   }


    return(
        <div>
            <form>
                <input name="username" type="text"></input>
                <br/>
                <input name="password" type="password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm