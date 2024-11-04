import NavBar from "./NavBar.jsx"

const Header = ({user}) =>{
    return (
        <header className="h-14 bg-black flex" >
            <NavBar user={user}/>
        </header>
    )
}
export default Header