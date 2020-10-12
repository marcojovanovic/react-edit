import React from 'react'

function Search({inputValue, setInputValue}) {

   


  return (
    <div className='m-3'>
      <input 
      type='text' 
      className='form-control'  
      placeholder='search contacts'
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
    </div>
  )
}

export default Search
