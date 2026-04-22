import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Integrantes from './pages/Integrantes'
import Cadastro from './pages/Cadastro'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="527602853606-nbsf0ndal71objnpjkbl5oss908jjbrp.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
)