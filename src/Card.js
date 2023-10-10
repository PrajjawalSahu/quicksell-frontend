import React, { useEffect, useState } from 'react'
import './Card.css'
// import profilepic from './download (1).png'
import doticon from './dots.jpeg'

function Card(props) {
  const [username, setUsername] = useState('');
  useEffect(() => {
    let user = props?.userData?.find((user) => user.id === props?.propD?.userId);
    setUsername(user?.name || '');
  }, []);
  return (
    props &&
    <div className='card'
    style={{borderColor:props.propD.priority===4?'red':props.propD.priority===3?'orange':props.propD.priority===2?'yellow':props.propD.priority===1?'green':'black'}}
    >
      <div className='cam'>
        <div className='propDid'>{props.propD.id}</div>
        <img src={`https://ui-avatars.com/api/?name=${username}&background=random&bold=true`} />
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
