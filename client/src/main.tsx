import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <div className='"flex flex-col  bg-pink-500 container mx-auto'>
    <App />
    </div> 
  </StrictMode>,
)
