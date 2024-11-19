import React from 'react'
import './GetStarted.css'
import chart from "../../assets/Right-Image.png"


const GetStarted = () => {
  return (
    <section className="g-container">
        <div className="left">
            <p>OVERLINE</p>
            <h1>Lorem ipsum dolor <br />
            alias voluptatum debitis eligendi aut.</h1>
            <p className='p2'>Lorem ipsum dolor, sit consectetur <br />
             adipisicing elit. Voluptatum, nulla.</p>
            <button className='start'>Start now</button>
            <button>Learn more</button>
            
        </div>
        <div className="right">
            <img src={chart} alt="" style={{width: 684, height:616, left: 702, borderRadius: 20}} />
        </div>
    </section>
  )
}

export default GetStarted