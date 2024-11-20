import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import Snowfall from 'react-snowfall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <Snowfall style={{position: 'fixed', width: '100%', height: '100%'}} snowflakeCount={50} color="white" radius={[1, 5]} speed={[1, 4]}></Snowfall>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer position="top-center"></ToastContainer>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
)
