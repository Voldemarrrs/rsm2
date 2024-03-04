import { useState } from 'react'
import background from './assets/banner.png'


export default function Banner() {
  return (
<div className="banner">
<img src={background} className="" alt="Vite logo" />
<div className="asd">
  <h1 className="banner-title">Title de lini</h1>
<p className="subtitle">БРЕНД ОДЕЖДЫ</p>
<button class="banner-button">Перейти в категории</button>
</div>

</div>)}