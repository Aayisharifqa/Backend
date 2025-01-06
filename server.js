const express =require('express');
const app = express();
//app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    console.log('hello');
    //res.status(500).send('hello');
    //res.status(200).send('hello');
    //res.json({message: 'hello'});
    //res.send("Hello world");
    res.render("index.ejs");
});
// app.get("/user",(req,res)=>{
//     res.send("user information");
// })
// app.get("/user/newuser",(req,res)=>{
//     res.send("new user");
// })

// app.get("/user/delete",(req,res)=>{
//     res.send("user deleted");
// })

const userRouter = require('./routes/user');
app.use('/user',userRouter)

app.listen(3000);
