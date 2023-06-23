# access_array_of_object
This is a accessing array of object using map&amp;destructering 

import React from 'react'

const App = () => {
  const obj=[{
   id:1,
   name:"john",
   age:23,


  },{
    id:2,
    name:"kalyan",
    age:34,

  },
  {
    id:3,
    name:"raju",
    age:56,
  }
]
  return (
    <div className='App'>
    <h1>good morning pavan kalyan</h1>
    {/* //map function */}
    {obj.map((item)=>{
      // destructuring
      const {id,name,age}=item;
      console.log(item)//print
      return(
      <ul key={id}>
        <li>{name}</li>
        <li>{age}</li>
        
        </ul>)
    })}
    
      
    </div>
  )
}

export default App;

