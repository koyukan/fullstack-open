import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gallery />
    <App />
  </React.StrictMode>,
)