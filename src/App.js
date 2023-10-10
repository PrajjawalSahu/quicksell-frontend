import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header';
import Status from './Status';
import User from './User';
import Priority from './Priority';

function App() {
  const [group,setGroup]=useState(localStorage.getItem('group')?localStorage.getItem('group'):"Status")
  const [order,setOrder]=useState(localStorage.getItem('order')?localStorage.getItem('order'):"Priority")
  const receiveGroupData = (data) => {
    setGroup(data);
  };
  const receiveOrderData = (data) => {
    setOrder(data);
  };
  return (
    <div className="App">
      <Header sendGroupData={receiveGroupData} sendOrderData={receiveOrderData}/>
      {group==="User"&&<User order={order}/>}
      {group==="Status"&&<Status order={order}/>}
      {group==="Priority"&&<Priority order={order}/>}
    </div>
  );
}

export default App;
