import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Priority.css'
import plusicon from './png-transparent-computer-icons-plus-sign-plus-sign-rectangle-grey-cross-thumbnail.png'
import doticon from './dots.jpeg'
import urgent from './urgent.png'
import high from './high.png'
import medium from './medium.png'
import low from './low.png'

function Priority(props) {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [heads, setHeads] = useState([])
  const [n, setN] = useState()
  const [u, setU] = useState()
  const [h, setH] = useState()
  const [m, setM] = useState()
  const [l, setL] = useState()
  const unique = []
  let temp = 0
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        'https://api.quicksell.co/v1/internal/frontend-assignment'
      )
      const result = await response.json()
      setData(result.tickets)
      setUserData(result.users)
      result.tickets.forEach((item) => {
        if (!unique.includes(item.status)) {
          unique.push(item.status)
        }
      })
      setHeads(unique)

      props.order === "Priority"?
      setData(result.tickets.slice().sort((beg, end) => end.priority - beg.priority)):
     setData(result.tickets.slice().sort((beg, end) => beg.title.localeCompare(end.title)));
    }
    fetching()
  }, [props.order])
  useEffect(() => {
    let count = data.reduce((count, initem) => {
        if (initem.priority === 0) {
          return count + 1;
        }
        return count;
      }, 0);
  
      setN(count);
    count = data.reduce((count, initem) => {
        if (initem.priority === 4) {
          return count + 1;
        }
        return count;
      }, 0);
  
      setU(count);
    count = data.reduce((count, initem) => {
        if (initem.priority === 3) {
          return count + 1;
        }
        return count;
      }, 0);
  
      setH(count);
     count = data.reduce((count, initem) => {
        if (initem.priority === 2) {
          return count + 1;
        }
        return count;
      }, 0);
  
      setM(count);
    count = data.reduce((count, initem) => {
        if (initem.priority === 1) {
          return count + 1;
        }
        return count;
      }, 0);
  
      setL(count);
  }, [data, heads])

  return (
    <div className='priority'>
      <div>
      <div className='head'>
                <div>No priority</div> 
                {n}
                 <div className='minhead'>
                 <img  className='plus'src={plusicon}/>
                 <img  className='dots'src={doticon}/>
                 </div>
            </div>
        {data &&
          data.map((initem, index) => {
            if (initem.priority === 0) {
              return (
                <div key={index}>
                  <Card propD={initem} userData={userData} />
                </div>
              )
            }
          })}
      </div>
      <div>
      <div className='head'>
                <div className='he'>
                    <img className='icons'src={urgent}/>
                    Urgent</div> 
                {u}
                 <div className='minhead'>
                 <img  className='plus'src={plusicon}/>
                 <img  className='dots'src={doticon}/>
                 </div>
            </div>
        {data &&
          data.map((initem, index) => {
            if (initem.priority === 4) {
              return (
                <div key={index}>
                  <Card propD={initem} userData={userData} />
                </div>
              )
            }
          })}
      </div>
      <div>
      <div className='head'>
                <div className='he'>
                <img className='icons'src={high}/>
                    High</div>
                {h} 
                 <div className='minhead'>
                 <img  className='plus'src={plusicon}/>
                 <img  className='dots'src={doticon}/>
                 </div>
            </div>
        {data &&
          data.map((initem, index) => {
            if (initem.priority === 3) {
              return (
                <div key={index}>
                  <Card propD={initem} userData={userData} />
                </div>
              )
            }
          })}
      </div>
      <div>
      <div className='head'>
                <div className='he'>
                <img className='icons'src={medium}/>
                    Medium</div> 
                {m}
                 <div className='minhead'>
                 <img  className='plus'src={plusicon}/>
                 <img  className='dots'src={doticon}/>
                 </div>
            </div>
        {data &&
          data.map((initem, index) => {
            if (initem.priority === 2) {
              return (
                <div key={index}>
                  <Card propD={initem} userData={userData} />
                </div>
              )
            }
          })}
      </div>
      <div>
      <div className='head'>
                <div className='he'>
                <img className='icons'src={low}/>
                    Low</div> 
                {l}
                 <div className='minhead'>
                 <img  className='plus'src={plusicon}/>
                 <img  className='dots'src={doticon}/>
                 </div>
            </div>
        {data &&
          data.map((initem, index) => {
            if (initem.priority === 1) {
              return (
                <div key={index}>
                  <Card propD={initem} userData={userData} />
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Priority
