import React from 'react'

function ListItem({id, name, email, handleDelete, handleEdit}) {
   
 

  return (
    <div >
      <ul className='list-group'>
  <li className='list-group-item'>
    {name} {email}
    <button onClick={()=>handleDelete(id)} className='btn btn-danger ml-3'>Delete</button>
    <button onClick={()=>handleEdit(id)} className='btn btn-warning ml-3'>Edit</button>
  
  </li>
       
      </ul>
     
      
    </div>
  )
}

export default ListItem
