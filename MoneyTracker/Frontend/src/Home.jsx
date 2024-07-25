import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const [expencetitle,setExpencetitle]=useState("")
    const [expenceamount,setExpenceamount]=useState("")
    const [expencedesc,setExpencedesc]=useState("")
    const [income,setIncome]=useState("")
    const [createdAt,setCreatedAt]=useState("")
    const [moneydata,setMoneydata]=useState([])
    const [total,setTotal]=useState(0)


    useEffect(()=>{
        showdata()
        const total=moneydata.reduce((sum,item)=>
            sum+item.expenceamount,0
        )
        setTotal(total)
    },[])

    const postData=async()=>{
        let result=await fetch("http://localhost:3000/expences",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                expencetitle:expencetitle,
                expenceamount:expenceamount,
                expencedesc:expencedesc,
                createdAt:createdAt
            })
        });
        result=await result.json()
        console.log(result)
        alert('add item')
    }

    const showdata=async()=>{
        let result=await fetch("http://localhost:3000/showitem")
        result=await result.json()
        console.log(result)
        setMoneydata(result);
    }
  return (
    <div>
        <h1>Add All Expences</h1>
        <input type="text" value={expencetitle} onChange={(e)=>{setExpencetitle(e.target.value)}} name="expencetitle" id="expencetitle" placeholder='Enter Expence name' />
        <input type="number" value={expenceamount} onChange={(e)=>{setExpenceamount(e.target.value)}} name="expenceamount" id="expenceamount" placeholder='Enter Expence Amount' />
        <input type="text" value={expencedesc} onChange={(e)=>{setExpencedesc(e.target.value)}} name="expencedesc" id="expencedesc" placeholder='Enter the expence desc' />
        <input type="date" value={createdAt} onChange={(e)=>{setCreatedAt(e.target.value)}} name='date' id='date' />
        <input type="submit" id='submit' value="Submit" onClick={postData} />
        <div className="cont">
        <h4>Enter your Income</h4>
        <input type="number" value={income} onChange={(e)=>{setIncome(e.target.value)}} name="income" id="income" placeholder='Enter Income' />
        </div>
       


        <h1>Expence Table</h1>
        <table>
            <thead>
                <th>S.no</th>
                <th>Expence Title</th>
                <th>Expence Amount</th>
                <th>Date of Bill</th>
                <th>Id</th>
            </thead>
            {
                moneydata.map((item,index)=>
                    <tbody>
                        <td>{index+1}</td>
                        <td>{item.expencetitle}</td>
                        <td>{item.expenceamount}</td>
                        <td>{item.createdAt}</td>
                        <td>{item._id}</td>
                        <td style={{backgroundColor:"chartreuse",color:"black"}}><Link to={'/update/'+item._id}>Update</Link></td>
                    </tbody>
                )
            }
        </table>
        <div className="cont">
         <div className="totalexpence">
            <h3>Total Expence:</h3>
            <h1>{total}.Rs</h1>
            </div> 
         <div className="balance">
             <h3>Balance:</h3>
             <h1>{income-total}.Rs</h1>
        </div> 
    </div>
        </div>

  )
}

export default Home