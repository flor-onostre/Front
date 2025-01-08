import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No se encontró el elemento con id="root"');
}

// Crea el root de React y renderiza la aplicación
const root = createRoot(rootElement);
root.render(
    <AuthProvider>
      <App />
    </AuthProvider>
);
