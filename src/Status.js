import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Status.css'
import plusicon from './png-transparent-computer-icons-plus-sign-plus-sign-rectangle-grey-cross-thumbnail.png'
import doticon from './dots.jpeg'
import backlog from './backlog.png'
import todo from './todo.png'
import inprogress from './inprogress.png'
import done from './done.png'
import canceled from './canceled.png'

function Status(props) {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [heads, setHeads] = useState([])
  const [b, setB] = useState(0)
  const [t, setT] = useState()
  const [i, setI] = useState()
  const [d, setD] = useState()
  const [c, setC] = useState()
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
      props.order === 'Priority'
        ? setData(
            result.tickets
              .slice()
              .sort((beg, end) => end.priority - beg.priority)
          )
        : setData(
            result.tickets
              .slice()
              .sort((beg, end) => beg.title.localeCompare(end.title))
          )
    }
    fetching()
  }, [props.order])
  useEffect(() => {
    console.log(data)
    console.log(heads)
  }, [data, heads])

  useEffect(() => {
    let count = data.reduce((count, initem) => {
      if (initem.status === 'Backlog') {
        return count + 1
      }
      return count
    }, 0)

    setB(count)
    count = data.reduce((count, initem) => {
      if (initem.status === 'Todo') {
        return count + 1
      }
      return count
    }, 0)
    setT(count)

    count = data.reduce((count, initem) => {
      if (initem.status === 'In progress') {
        return count + 1
      }
      return count
    }, 0)
    setI(count)

    count = data.reduce((count, initem) => {
      if (initem.status === 'Done') {
        return count + 1
      }
      return count
    }, 0)
    setD(count)

    count = data.reduce((count, initem) => {
      if (initem.status === 'Canceled') {
        return count + 1
      }
      return count
    }, 0)
    setC(count)
  }, [data])
  return (
    <div className='status'>
      <div>
        <div className='head'>
          <div className='he'>
            <img className='icons' src={backlog} />
            Backlog
          </div>
          {b}
          <div className='minhead'>
            <img className='plus' src={plusicon} />
            <img className='dots' src={doticon} />
          </div>
        </div>
        {data &&
          data.map((initem, index) => {
            if (initem.status === 'Backlog') {
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
            <img className='icons' src={todo} />
            Todo
          </div>
          {t}
          <div className='minhead'>
            <img className='plus' src={plusicon} />
            <img className='dots' src={doticon} />
          </div>
        </div>

        {data &&
          data.map((initem, index) => {
            if (initem.status === 'Todo') {
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
            <img className='icons' src={inprogress} />
            In progress
          </div>
          {i}
          <div className='minhead'>
            <img className='plus' src={plusicon} />
            <img className='dots' src={doticon} />
          </div>
        </div>

        {data &&
          data.map((initem, index) => {
            if (initem.status === 'In progress') {
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
            <img className='icons' src={done} />
            Done
          </div>
          {d}
          <div className='minhead'>
            <img className='plus' src={plusicon} />
            <img className='dots' src={doticon} />
          </div>
        </div>

        {data &&
          data.map((initem, index) => {
            if (initem.status === 'Done') {
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
            <img className='icons' src={canceled} />
            Canceled
          </div>
          {c}
          <div className='minhead'>
            <img className='plus' src={plusicon} />
            <img className='dots' src={doticon} />
          </div>
        </div>

        {data &&
          data.map((initem, index) => {
            if (initem.status === 'Canceled') {
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

export default Status
