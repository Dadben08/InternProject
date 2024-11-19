import React from 'react'
import './Hero.css'
import image from'../../assets/Frame1.png'
import image2 from'../../assets/Frame2.png'
import Vector from '../../assets/Vector.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Vector3 from '../../assets/Vector3.png'
import Frame from '../../assets/Frame.png'


const Hero = () => {
  return (
    <div className='hero'>
        <p>NON FUNGIBLE TOKEN</p>
        <span>
            <img src={Frame} alt=""  style={{width: 737, height: 170, top: 52}}/>  
        </span>
        <p className='discover'>Discover, collect, and sell</p>
        <div className='search'>
            <input type="text"  placeholder='Items, collections, and creators'/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAolJREFUSEvllkmojXEYxn9XxpRYUKaVuIaQKZljI2VhZYoSQmSBhdhZmS0sSMRSpsSChSRFZiFRZLhk3pBCkrxP3u/27zvnu9/bdU534b85p3Pe53n+3zs9XwNtdBraSJeIcHtgAjAY6AE8AW4Cb//l0i0J9wU2A4uAblVErgO7gZOtuUCR8ELgENAlQHoemAd8DcQ2h
            1QTXuaiCvoNHAXOAveA9/Z9NDAJWAn0d6bbwFTge1Q8LzwSuAu0Az4Cs4FbBWSdgcPAAv9/v2FWt1b4HDDLwVOAKyVEajzFjAd+WXYagecR8fSJewEfHHTQunZFhAAY5VlSuJpxawSXCs/3ego3EbgWIfCYh8Aw4BIwI4JLhdf7eAjXFfgWIfAYTYCa8h3QJ4JLhTcC2xzUydL2M0LgMcIJ/wXoHsGlwkuAIw4aBDyNEHjMMWCul0dlKj2p8AjgviPWAPtK0X8DOnhTap0esFlfFcHl5/i1LY9+Vi996ql
            /BEg2ALs8LtyUeeG1wF4nUdqXlgiPAa7aCKknTni6A3elwp06+kIY5+gz1jDrgBc5Ngktt12+3SdAy2Mg8DKkSqWwcD2Bi8DwhERz+sBrORbQxbQydbSfVedTxrfFDONxRLzIneRKe/yptBaLji602JxJdZZ96shUNgFNLV2g7EVA7iPCmd5s8mW9CFwAjgN3nHyI1fdRIqSXBLnVsyLxMuFI1rKY02adcxKALjjNrbSCp5bCGj85lXokOxrLyTYdr/LKtRQWt0ojoxiQCCnd0303NP9ca+FM/IZtsd6J+B
            u3z0/Zb/UQFrdmWoslS7s8Wl5d1yfOyIdaii/bgtkJ7Kh3jfP8ssjP1UajXqkuHcP/T/gP7KtmH4DlTJUAAAAASUVORK5CYII="/>
        </div>

        <div className="brands">
            <img src={Vector} alt="" />
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Vector3} alt="" />
        </div>
    
    </div>
  )
}

export default Hero