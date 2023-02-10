const express= require("express");
const cors=require('cors');
const app=express();
const connectDatabase= require('./config/connectDatabase')
const userRoutes=require('./routes/userRoutes')
app.use(cors());
app.use(express.json());

connectDatabase();
app.use("/user",userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080,()=>{
        console.log('app is running on port 8080'); 
})