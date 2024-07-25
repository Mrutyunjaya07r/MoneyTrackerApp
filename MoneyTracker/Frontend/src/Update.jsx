import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

function Update() {
    let params=useParams()
    const [expencetitle,setExpencetitle]=useState("")
    const [expenceamount,setExpenceamount]=useState("")
    const [expencedesc,setExpencedesc]=useState("")

    const updateData=async()=>{
        let result=await fetch(`http://localhost:3000/updateitem/${params.id}`,{
            method:"put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                expencetitle:expencetitle,
                expenceamount:expenceamount,
                expencedesc:expencedesc,
            })
        });
        result=await result.json()
        console.log(result)
        alert('update item')
        
    }
  return (
    <div>
        <h1>Update</h1>
        <div className="form">
        <input type="text" value={expencetitle} onChange={(e)=>{setExpencetitle(e.target.value)}} name="expencetitle" id="expencetitle" placeholder='Enter Expence name' />
        <input type="number" value={expenceamount} onChange={(e)=>{setExpenceamount(e.target.value)}} name="expenceamount" id="expenceamount" placeholder='Enter Expence Amount' />
        <input type="text" value={expencedesc} onChange={(e)=>{setExpencedesc(e.target.value)}} name="expencedesc" id="expencedesc" placeholder='Enter the expence desc' />
        <input type="submit" value="Update" style={{backgroundColor:"green",color:"white"}} onClick={updateData} />
        </div>
       
    </div>
  )
}

export default Update