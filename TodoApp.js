import React,{useState, useEffect} from 'react'
import ListItem from './ListItem'
import Search from './Search'

function TodoApp() {


   const example = [{
     id:Date.now() + 1, 
     newName:'Pera', 
     newEmail: 'jova@gmail.com',
   },
   {
     id:Date.now(), 
     newName:'dfddf', 
     newEmail: 'jova@gmail.com'
   }
    ]


    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [contacts, setContacts]=useState(example)
    const [inputValue, setInputValue]=useState('')



    // add contact

    const handleSubmit = (e) =>{

      e.preventDefault()

        if(name && email){

      setContacts ([...contacts, 
         {id:Date.now(),
         newName:name,
         newEmail:email,   
      }])

        setEmail('')
        setName('')
        }
     
    }

    // delete
    const handleDelete = (id) =>{

      const newContact = contacts.filter(item=> item.id !== id)
      setContacts(newContact)

    }

    const handleEdit = (id,e) =>{

      // take name i email to input

    let idx = contacts.findIndex(item=> item.id === id)

      let editName = contacts[idx].newName
      let editEmail = contacts[idx].newEmail

        setName(editName)
        setEmail(editEmail)

        // delete
        const newContact = contacts.filter(item=> item.id !== id)

        setContacts(newContact)
     

  }

  // filtering

  const filteredContacts = contacts.filter((contact)=>{

   return contact.newName.toLowerCase().startsWith(inputValue)
}) 

console.log(filteredContacts)


  return (
    <div className='container p-5'>

      <h1 className='display-4 text-center mb-5 text-success'>Contact telephone</h1>

      <form>
        <input
         type='name' 
         className='form-control mb-3'
         placeholder='name' 
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />

        <input
         type='email' 
         className='form-control' 
         placeholder='email'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}

         />
         <button onClick={handleSubmit} className='btn btn-primary btn-block mt-5'>Add Contact</button>

          <h2 className='display-5 text-center mt-5 mb-2'>Search</h2>
         <Search 
         inputValue={inputValue} 
         setInputValue={setInputValue}
         
         />

      <div className='mt-5'>
      {filteredContacts?.map(contact=>{

          

          return <ListItem 
          key={contact.id}  
          name={contact.newName} 
          email={contact.newEmail}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          id={contact.id}
          
          />

      })}

      </div>



      </form>
      


    </div>
  )
}

export default TodoApp
