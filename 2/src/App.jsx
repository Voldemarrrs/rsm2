import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import icons from './assets/h-ic.png'
import background from './assets/banner.png'
import './App.css'

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
      <div className="banner">
      <img src={background} className="" alt="Vite logo" />
      <div className="asd">
        <h1 className="banner-title">Title de lini</h1>
      <p className="subtitle">БРЕНД ОДЕЖДЫ</p>
      <button class="banner-button">Перейти в категории</button>
      </div>
      
      </div>
    </>
  )
}

export default App
