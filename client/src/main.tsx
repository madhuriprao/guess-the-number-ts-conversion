import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/Header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>

  <div className="h-screen  flex items-center justify-center 
   bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"> 
    <App />
    </div>
  </StrictMode>,
)
