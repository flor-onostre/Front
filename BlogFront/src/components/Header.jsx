import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./Header.css"

const links = [{to:"/", label: "Inicio"}]

const linksCategorias = [
    {to:"/vegetarianas", label: "Vegetarianas", className:"link-end"},
    {to:"/veganas", label: "Veganas", className:"link-end"},
    {to:"/sin-gluten", label: "Sin Gluten", className:"link-end"},
    {to:"/bajas-en-carbohidratos", label: "Bajas en Carbohidratos", className:"link-end"},
    {to:"/para-personas-alergicas", label: "Para Personas Alérgicas", className:"link-end"},
]

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
        <grid className="header">
        <grid className="contenedorNav">
            <div className="contendorLinks">
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} className="link">{link.label}</NavLink>
                ))}
            </div>
            <h1 className="titulo">Recetas para Todos</h1>
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
        </grid>
        <div className="contenedorLinksCategorias">    
                {linksCategorias.map((link) => (
                    <NavLink key={link.to} to={link.to} className={"linkCategorias"}>{link.label}</NavLink>
                ))}
            </div> 
        </grid>
    )
}

export default Header;