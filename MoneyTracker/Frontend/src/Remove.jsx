import React, { useState } from 'react'

function Remove() {
    const [_id,set_Id]=useState("")

    const removeData=async()=>{
        let result=await fetch("http://localhost:3000/deleteitem",{
            method:"delete",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                _id:_id
            })
        })
        result=await result.json();
        console.log("deleted successfully")
        alert("deleted successfully")
    }
  return (
    <div>
        <h1>Remove Item</h1>
        <div className="form">
            <input type="text" name="id" id="id" placeholder='Enter your Ids' value={_id} onChange={(e)=>{set_Id(e.target.value)}} />
            <input type="submit" id='delete' value="Delete" onClick={removeData}  />
        </div>

    </div>
  )
}

export default Remove