import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);
    setTitle("");
    setDetails("");
  
  }
  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className='h-screen lg:flex bg-black ' >
      <form action="" className=' flex items-start lg:w-1/2 
      flex-col gap-4 p-10 '
      onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <h1 className='text-white text-2xl font-bold'>Add Notes</h1>
          <input type="text" placeholder='Enter Notes Heading  ' 
        className='h-12 w-full text-white border-2 rounded
          p-2 outline-none'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            
          }}
         />
        <textarea name="" id="" placeholder='Enter Details' 
        className='text-white h-45 w-full  border-2 rounded
          p-2 outline-none'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        ></textarea>
        <button  className='h-12 w-full bg-white rounded
         outline-none font-semibold active:scale-95 '
       
         >
          Add Note</button>
        
        
      </form>
      
     <div className='p-9 flex flex-col  lg:border-l-2  border-l-white lg:w-1/2'>
      <h1 className='text-white text-2xl font-bold'>Recent Notes</h1>
      <div className="flex flex-wrap items-start justify-start gap-6 mt-5 h-[90%] overflow-auto">
        {task.map(function(elem,idx){
          return <div key = {idx} className="relative h-50 w-40 flex flex-col justify-between  py-8 pb-4 px-4 bg-cover bg-center bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)] rounded-2xl">
            <div>
            <h3 className='text-black font-bold leading-tight'>{elem.title}</h3>
            <p className='text-gray-400 text-xs leading-tight mt-1'>{elem.details}</p>
            </div>
            
            <button onClick={()=>{
        deleteNote(idx);
       }} className='bg-red-500 h-8 w-full cursor-pointer active:scale-95 text-white font-semibold rounded'>Delete</button>
          
          </div>

        })}
    
      
     
      
      
      </div>
     </div>
    </div>
  )
}

export default App
