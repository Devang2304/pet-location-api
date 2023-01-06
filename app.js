const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes= require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts',postsRoutes);

const PORT=5000;

mongoose.connect("mongodb+srv://DEVANG23:sGS9G3qDgNVQztE@cluster0.ngb8lfk.mongodb.net/pet_finder",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>console.log('No connection'));

app.listen(PORT,()=>{
    console.log(`server is listening to  http://localhost:${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('Hey we are on home page');
})