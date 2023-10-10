import React from 'react'
import './Card.css'
import profilepic from './download (1).png'
import doticon from './dots.jpeg'

function Card(props) {
  return (
    <div className='card'>
      <div className='cam'>
        <div>{props.propD.id}</div>
        <img src={profilepic} />
      </div>
      <div className='title'>{props.propD.title}</div>
      <div>
        <div className='feature'>
          <img className='dots'src={doticon}/>
          {props.propD.tag}</div>
      </div>
    </div>
  )
}

export default Card
