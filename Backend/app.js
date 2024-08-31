let express=require('express')
let mongoose=require('mongoose');
let cors=require('cors');
let app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/groundwaterconversation")
.then(()=>{console.log("connected to database")})
.catch(err=>{console.log(err)})

require('./models/model')
require('./models/post')
require('./models/articel')
app.use(require('./Router/routes'))

app.get("/",(req,res)=>{
    res.send("Hello World");
})

let port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`App is running at ${port}`)});