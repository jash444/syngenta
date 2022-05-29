
import './App.css';
import React,{useEffect, useState} from "react"
import Cylce from './Cylce';


function App() {
  const [hex,setHex]=useState([])
  const [element,setElement]=useState(Number)
  const [add,setAdd]=useState([])
  const circles=()=>{
    var arr = []
        for(var i=1; i<6; i++){
          arr.push(`#${Math.floor(Math.random()*16777215).toString(16)}`)
        }
        console.log(arr)
        arr=arr.sort()
        console.log(arr)
  setHex(arr)
 // console.log(hex)
    }
  
const handelChange=(e)=>{

console.log(hex)
if(e>hex.length){
  alert("enter number correct")
}

const arr = hex.filter((el,i)=>i+1!=element)
setHex([...arr])
var arr3=[]
arr3=add.push(hex[element-1])
setAdd([...arr3])
}
  

 useEffect(()=>{
  circles()
}, [])
const handleReturn=(el)=>{
 console.log(el)
   hex.push(el)
  console.log(hex)
   let arr=hex.sort()
  console.log(arr)
  setHex([...arr])
   const arr1 = add.filter((e,i)=>e!=el)
   setAdd(...[arr1])
  

}

  return (
    <div className="App">
    
     <div className="circle" style={{float:"left"}}>
  
     { hex.map((el)=> <Cylce key={el} color={el} num={el}></Cylce>)}
     
     <input onChange={(e)=>{setElement(e.target.value)}} type="number"></input>
     <button onClick={()=>{handelChange(element)}}>click</button>
     <div className="element" >
       <div >{add.map((el)=>(<div  onClick={()=>handleReturn(el)} style={{backgroundColor:`${el}`,width:"100px",height:"100px",borderRadius:"50%",margin:"10px"}}></div>))}</div>
     </div>
 
     </div>
    </div>
  )

  }
export default App;


