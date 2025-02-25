"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, {title, desc}]);
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  const deleteHandler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let rendertask = <h2 className='text-center font-bold'>No Task Availale</h2>

  if (maintask.length>0) {
    rendertask = maintask.map((t,i) => {
      return (
        <li key = {i}className='flex item-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={() => {
          deleteHandler(i)
        }} 
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      )
  
    })
    
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Krushna's TODO list </h1>
    <form onSubmit={submithandler}>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter Title here'
      value={title}
      onChange={((e) => {
        settitle(e.target.value)

      })}/>

<input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder='Enter Description here'
      value={desc}
      onChange={((e) => {
        setdesc(e.target.value)

      })}/>

      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page