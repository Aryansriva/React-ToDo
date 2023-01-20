import React from 'react'
import { useState } from 'react'
import {BsTrash} from "react-icons/bs"
export default function Item(props) {

    const [done,setDone] = useState(false);
  return (
    <div className= 'select-none flex justify-between items-center p-3 w-full'>
      <div>
        <span className='pr-2 text-slate-500 text-xs'>{props.time}</span>
        <span onClick={()=>{setDone(!done)}} className={`${(done===true) ? 'line-through' :  ''} text-xl`}>{props.item}</span>
      </div>
      <div onClick={()=> props.removeHandler(props.id)}>
        <BsTrash className='text-[#e74c3c] cursor-pointer' />
      </div>
    </div>
  )
}
