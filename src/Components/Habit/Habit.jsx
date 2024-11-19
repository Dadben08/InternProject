import React from 'react'
import './Habit.css'
import leftimage from '../../assets/left-image.png'
import vector from '../../assets/Vector-i.png'
import group from '../../assets/Group.png'

const Habit = () => {
  return (
    
     <div className="H-container">
        <div className="left">
            <img src={leftimage} alt="" />
        </div>
        <div className="right">
            <p>OVERLINE</p>
            <h1>Habitant tristique <br />aliquam in velbr <br />scelerisque</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugiat.</h5>
            <span>
                    <h6><img src={vector} alt="" /> <br />Sollicitudin sapien <br /></h6>
                    <h6><img src={group} alt="" /> <br />Sollicitudin sapien <br /></h6>
            </span>
            <button className='get'>Get started</button>
            <button>Learn more</button>
        </div>
      </div>
    
  )
}

export default Habit