import Logo from "./icons_assets/Logo.svg"

const Nav = () => {
    return(
        <div className="navbar">
            <img src= {Logo} alt="logo"></img>
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> About </a></li>
                <li><a href="#"> Reservations </a></li>
                <li><a href="#"> Order Online </a></li>
                <li><a href="#"> Login </a></li>
            </ul>
        </div>
    )
}

export default Nav;