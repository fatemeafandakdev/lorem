
import React ,{ useState } from 'react'

function App({data}) {
  const [number,setNumber]=useState(0)
  const [text,setText]=useState([])
  let count=parseInt(number)
const maker=(e)=>{
  
  e.preventDefault() 
   
   if(count<=0){
    count=1
   }
    if(count>4){
    count=4
   }
   setText(data.slice(0,count))
}

  return (
    <div className=' container-fluid py-5 background'>
      <h2 className='text-center'>lorem maker </h2>
 
      <form  className='d-flex justify-content-center  'onSubmit={maker} >
        <label className='text-bold fs-5'>Paragraph number:</label>
       <input type='number' 
       value={count}
       onChange={(e)=>setNumber(e.target.value)}
       />
   <button  className='text-white bg-danger '>make</button>
      </form>
      <div className=' mt-5 w-50 mx-auto  fw-bold '>
      {text.map((item)=>{
return <p>{item}</p>
 
        })}

      </div>
       
    </div>
  )
}

export default App

