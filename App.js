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
    {obj.map((item)=>{
      const {id,name,age}=item;
      console.log(item)
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
