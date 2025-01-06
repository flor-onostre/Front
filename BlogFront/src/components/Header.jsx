import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./Header.css"

const links = [{to:"/", label: "Inicio"}]

const loggedLinks = [
    {to:"/mis-blogs", label: "Mis Blogs"},
    {to:"/crear-blog", label: "Nuevo Blog", className:"link-end"},
    {to:"/logout", label: "Cerrar Sesión", className:"link-end"}
]

const logoutLinks = [
    {to:"/login", label: "Iniciar Sesión", className:"link-end"},
    {to:"/register", label: "Registrarse", className:"link-end"}
]

const Header = () => {

    const { isLogged } = useContext(AuthContext)

    return (
        <nav className="contenedorNav">
            <div className="contendorLinks">
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} className="link">{link.label}</NavLink>
                ))}
            </div>
            <div className="contenedorLinksDinamico">
                {isLogged &&
                loggedLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={"link"}>
                    {link.label}
                    </NavLink>
                ))}
                {!isLogged &&
                logoutLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={"link"}>
                    {link.label}
                    </NavLink>
                ))}
            </div>    
        </nav>    
    
    )
}

export default Header;