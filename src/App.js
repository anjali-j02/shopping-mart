import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import NavBar from './components/navbar/nav-bar'

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes />
    </BrowserRouter>
  )
}

export default App
