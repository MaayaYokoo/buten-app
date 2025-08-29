import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
// import './index.css'               // 削除
  
createRoot(document.getElementById('root')).render(
  <StrictMode>  
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode> 
)