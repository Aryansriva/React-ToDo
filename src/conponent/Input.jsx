import React from 'react'
import { useRef } from 'react';
import {AiOutlinePlus} from "react-icons/ai";
export default function Input(props) {
    const inputBox = useRef();
  return (
    <div className="p-3 flex justify-between">
      <input type="text" placeholder='Enter Your Todo here !!!' className="focus:outline-none w-[90%] p-3 rounded-xl opacity-10  font-bold" ref = {inputBox}></input>
      <div className='flex justify-center items-center bg-slate-50 w-[8%] rounded-xl text-2xl cursor-pointer' onClick={()=>{
        props.handler(inputBox.current.value)
        inputBox.current.value="";
      }}>
        <AiOutlinePlus/>
      </div>
    </div>
  )
}
