import React, { useEffect, useState } from 'react'
import './Header.css';
import filtericon from './filtericon.png'

function Header(props) {
  const [show,setShow]=useState(false)
  const [group,setGroup]=useState("Status")
  const [order,setOrder]=useState("Priority")
  const handleshow=()=>{
    setShow(!show)
  }
  const statusbtn=()=>{
    setGroup("Status")
    localStorage.setItem('group',"Status")
    props.sendGroupData("Status")
    setShow(!show)
  }
  const userbtn=()=>{
    setGroup("User")
    localStorage.setItem('group',"User")
    props.sendGroupData("User")
    setShow(!show)
  }
  const prioritybtn=()=>{
    setGroup("Priority")
    localStorage.setItem('group',"Priority")
    props.sendGroupData("Priority")
    setShow(!show)
  }
  const prioritybtn2=()=>{
    setOrder("Priority")
    localStorage.setItem('order',"Priority")
    props.sendOrderData("Priority")
    setShow(!show)
  }
  const titlebtn=()=>{
    setOrder("Title")
    localStorage.setItem('order',"Title")
    props.sendOrderData("Title")
    setShow(!show)
  }
  return (
    <div className='header'>
      <button className='display'onClick={handleshow}>
        <img className='filtericon'src={filtericon}/>
        Display</button>
      <div className={`box ${show?'show':'notshow'}`}>
        <div className='sort'>
          Grouping 
          <div class="dropdown">
              <button class="dropbtn">{localStorage.getItem('group')?localStorage.getItem('group'):"Status"}</button>
              <div class="dropdown-content">
                <button className='btn'onClick={statusbtn}>Status</button>
                <button className='btn' onClick={userbtn}>User</button>
                <button className='btn' onClick={prioritybtn}>Priority</button>
              </div>
            </div>
        </div>
        <div className='sort'>
          ordering
          <div class="dropdown">
              <button class="dropbtn">{localStorage.getItem('order')?localStorage.getItem('order'):"Priority"}</button>
              <div class="dropdown-content">
                <button className='btn' onClick={prioritybtn2}>Priority</button>
                <button className='btn' onClick={titlebtn}>Title</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header