let express=require('express');
let cors=require('cors');
let mongoose=require('mongoose');
let app=express()

mongoose.connect("mongodb://127.0.0.1/BharatInternMoneyTracker")
.then(()=>{console.log(`connected to mongodb`)})
.catch((err)=>{console.log(`not connected`,err)})
app.use(express.json());
app.use(cors())
let MONEYTRACK=require('./Models/moneytrack')

app.get("/",(req,res)=>{
    res.send("hello from backend")
})
app.post("/expences",(req,res)=>{
    const {expencetitle,expenceamount,expencedesc,createdAt}=req.body
    if(!expencetitle||!expenceamount||!expencedesc||!createdAt){
        return res.status(404).send("fill all the feilds")
    }
    let moneytrack=new MONEYTRACK({
        expencetitle,
        expenceamount,
        expencedesc,
        createdAt,
    })
    let result=moneytrack.save();
    console.log(result)
    res.send(result)
    console.log("Add item successfully")
})
app.get("/showitem",async(req,res)=>{
    let result=await MONEYTRACK.find();
    if(!result){
        return res.status(404).send("not showned")
    }
    console.log("Show data successfully");
    res.send(result)
    console.log(result)
})

app.put("/updateitem/:id",async(req,res)=>{
    let result=await MONEYTRACK.findByIdAndUpdate({_id:req.params.id},{
        expencetitle:req.body.expencetitle,
        expenceamount:req.body.expenceamount,
        expencedesc:req.body.expencedesc,
    })
    res.send(result);
    console.log("update successfully");
    console.log(result)
})

app.delete("/deleteitem",async(req,res)=>{
    let result=await MONEYTRACK.findByIdAndDelete({
        _id:req.body._id
    })
    if(!result){
        return res.status(404).send("not deleted")
    }
    res.send(result)
    console.log(result);
    console.log("deleted successfully")
})

let port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`app is running at ${port}`)})