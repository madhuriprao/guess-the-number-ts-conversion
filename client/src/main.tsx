import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <div  className="h-screen w-full flex items-center justify-center 
   bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    <App />
    </div> 
  </StrictMode>,
)
// className="grid justify-items-center justify-center bg-slate-300"
