import React, { useEffect, useState } from 'react'
import Card from './Card'
import './User.css'
import usericon from './download (1).png'
import dots from './dots.jpeg'

function User(props) {
    const [data,setData]=useState([])
    const [heads,setHeads]=useState([])
    const [users,setUsers]=useState([])
    const unique = [];
    useEffect(()=>{
        const fetching= async() =>{
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const result =await response.json();
                setData(result.tickets); 
                setUsers(result.users)
                console.log(result.users)
                result.tickets.forEach((item) => {
                    if (!unique.includes(item.userId)) {
                      unique.push(item.userId);
                    }
                  })
                  setHeads(unique);

                  props.order === "Priority"?
                  setData(result.tickets.slice().sort((beg, end) => end.priority - beg.priority)):
                 setData(result.tickets.slice().sort((beg, end) => beg.title.localeCompare(end.title)));
        }
        fetching()

       

    },[props.order]);
    useEffect(() => {
        console.log(data);
        console.log(heads);
      }, [data,heads]);
    
  return (
    <div className='user'>
             {data.length > 0 ? (
          users.map((item, index) => (
              <div key={index}>
                <div className='head'>
                    <div>
                      <img className='usericon'src={usericon}/>
                      {item.name}</div>
                    <div>
                      <img className='dots'src={dots}/>
                    </div>
                </div>
                {data&&data.map((initem,index)=>{
                    if(initem.userId===item.id){
                    return(
                        <div key={index}>
                        <Card propD={initem}/>
                    </div>
                    )
                    }
                })}
              </div>
              
          ))
        ) : (
          <p>Loading boss...</p>
        )}
    </div>
  )
}

export default User