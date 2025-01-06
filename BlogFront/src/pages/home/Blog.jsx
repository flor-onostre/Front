import "./Blog.css";
import { useNavigate } from "react-router-dom";
const Blog = ({ blog }) => {
    const navigate = useNavigate()
  const hanldeClick =() =>{
    navigate(`/blogs/${blog.id}`)
  }
    
  return (
    <div className="contenedor" onClick={hanldeClick}>
      <img src={blog.imagen} alt={blog.descripcion} className="img" />
      <div className="datos">
        <h2 className="titulo">{blog.titulo}</h2>
        <div className="subdatos">
          <p className="autor">{blog.author || "autor por defecto"}</p>
          <p className="fecha">
            {new Date(blog.fechaPublicacion).toLocaleString("es")}
          </p>
        </div>
        <p className="descripcion">{blog.descripcion}</p>
      </div>
    </div>
  );
};

export default Blog;