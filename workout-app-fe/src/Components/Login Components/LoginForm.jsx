import { useState } from "react"

const LoginForm = () => {

    const [usernameInput, setUsernameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

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