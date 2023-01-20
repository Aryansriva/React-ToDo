import React from 'react'
import Item from './Item'
export default function Box(props) {
    const items = props.data.map( 
        (singleData,key)=> <Item key={key} id = {key} time={singleData.time} item = {singleData.item}  removeHandler = {props.deleteHandle}/>
    )
  return (
    <div>
      {/* <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/> */}

      {items}
    </div>
  )
}
