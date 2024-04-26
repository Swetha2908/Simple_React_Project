import React from 'react'
import "./Tag.css"

const Tag = ({tagName,selecttag,selected}) => {
 // console.log("props",props);
 const tagStyle={
  HTML :{backgroundColor:"#fda821"},
  CSS :{backgroundColor:"#15d4c8"},
  JavaScript :{backgroundColor:"#ffd12c"},
  React :{backgroundColor:"#4cdafc"},
  default :{backgroundColor:"#f9f9f9"},
 }
  return (
   
    <button 
    className='tag'
    type="button"
    style={selected ? tagStyle[tagName] : tagStyle.default }
    onClick={()=>selecttag(tagName)}
    >{tagName}</button>
    
  )
}

export default Tag