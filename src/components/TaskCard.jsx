import React from 'react'
import Tag from './Tag' 
import './TaskCard.css'
import deleteicon from "../assets/delete.png"

const TaskCard = ({title,tags,handleDelete,index}) => {
  return (
    <article className='task-card'>
        <p className='task-text'>{title}</p>
        <div className='task-card-bot'>
            <div className='task-card-tags'>
              {
              tags.map((tag,index)=>
              
                <Tag key={index} tagName={tag} selected={true} />
)}
            </div>
            <div className='task-delete' onClick={()=>handleDelete(index)}><img src={deleteicon} className='delete-icon' alt=''></img></div>
        </div>
        </article>
  )
}

export default TaskCard