import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import CrearBlog from './pages/blogs/crearBlog/CrearBlog.jsx'
import ModificarBlog from './pages/blogs/modificarBlog/ModificarBlog.jsx'
import VerBlog from './pages/blogs/verBlog/VerBlog.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import MyBlogs from './pages/myBlogs/MyBlogs.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs/:id' element={<VerBlog/>} />
      <Route path='/crear-blog' element={<CrearBlog/>} />
      <Route path='/modificar-blog/:id' element={<ModificarBlog/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/mis-blogs' element={<MyBlogs/>} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
