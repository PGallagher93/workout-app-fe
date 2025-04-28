import LoginForm from "../Components/Login Components/LoginForm"
import PageContainer from "../Components/Basic Components/PageContainer"

const Login = ({setUser, user})=>{

    return (
        <PageContainer>
            <h1>Login</h1>
            <div>
            <LoginForm setUser={setUser} user={user}/>
            </div>
        </PageContainer>
    )
}

export default Login