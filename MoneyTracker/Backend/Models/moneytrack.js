let mongoose=require('mongoose')

let moneySchema=new mongoose.Schema({
    expencetitle:{type:String,required:true},
    expenceamount:{type:Number,required:true},
    expencedesc:{type:String,required:true},
    createdAt:{type:Date}
})

let MONEYTRACK=mongoose.model("MONEYTRACK",moneySchema)
module.exports=MONEYTRACK