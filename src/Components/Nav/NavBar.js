import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        /* Nav bar item to display locations */
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link " to="/home">Home</Link>                          
            </li> 

            <li className="navbar_item">
                <Link className="navbar_link" to="/articles">Articles</Link>                          
            </li> 
            <li className="navbar_item">
            <Link className="navbar_link" to="/event">Events</Link>                          
            </li>
            <li className="navbar_item me-auto">
            <Link className="navbar_link" to="/messages">Messages</Link>                          
            </li>
            <li className="navbar_item">
            <Link className="navbar_link" to="/tasks">Tasks</Link>                          
            </li>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("nutshell_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
            }
