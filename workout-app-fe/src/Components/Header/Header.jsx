import NavBar from "./NavBar.jsx"

const Header = ({user}) =>{
    return (
        <header>
            <NavBar user={user}/>
        </header>
    )
}
export default Header