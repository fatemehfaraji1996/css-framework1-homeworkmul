import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import createTheme from '../src/theme.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider theme={createTheme}>

    <App />
</ThemeProvider>
  </React.StrictMode>,
)
