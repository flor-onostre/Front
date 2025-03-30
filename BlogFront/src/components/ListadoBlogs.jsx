import { useEffect, useState } from "react";
import Blog from "../pages/home/Blog.jsx";
import BlogAdmin from "../pages/myBlogs/BlogsAdmin.jsx";
const ListadoBlogs = ({ isLogged = false }) => {
  const backurl = import.meta.env.REACT_APP_BACKEND_URL;
  //si es true hardcodeamos si es false mostramos todo
  const [blogs, setBlogs] = useState([]);
  //const [blogsFilter, setBlogsFilter] = useState([]);
  let blogsFilter = blogs

  const fetchback = async () => {
    const response = await fetch(`${backurl}/blogs`)
  const responsejson = await response.json()
  console.log(responsejson.data)
  setBlogs(responsejson.data)
  }


  const fetchBorrarBlog = async (id) => {
    const response = await fetch(`${backurl}/blogs/${id}`, { 
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
     })
  const responsejson = await response.json()
  console.log(responsejson.data)
  fetchback()
  }


  useEffect(() => {
    fetchback()
  },[])

  const handleDelete = (id) => {
    fetchBorrarBlog(id)
 
  }

  if (isLogged) {

      blogsFilter = blogs || []
    return (
      <>
        {blogsFilter?.map((blog) => (
          <BlogAdmin blog={blog} key={blog.id} handleDelete={handleDelete} />
        ))}
      </>
    );
  }

  return (
    <>
        <h2>Listado</h2>
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </>
  );
};

export default ListadoBlogs;