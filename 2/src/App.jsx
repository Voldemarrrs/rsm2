import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import icons from './assets/h-ic.png'
import background from './assets/banner.png'
import './App.css'
import Banner from "./Banner.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="header">
       
          <img src={logo} className="logo" alt="Vite logo" />

          <div className="header-menu">
            
            <a href="" class="menu-item">Главная</a>
            <a href="" class="menu-item">Каталог</a>
            <a href="" class="menu-item">Информация</a>
          </div>

          <div className="header-icons">
          <img src={icons} className="" alt="Vite logo" />
          
          </div>
       
      </div>
      <Banner/>
      
  
    </>
  )
}

export default App
