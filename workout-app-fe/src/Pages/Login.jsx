import LoginForm from "../Components/Login Components/LoginForm"

const Login = ({setUser, user})=>{

    return (
        <div className="pt-14 bg-zinc-800 h-screen">
            <h1>Login</h1>
            <div>
            <LoginForm setUser={setUser} user={user}/>
            </div>
        </div>
    )
}

export default Login