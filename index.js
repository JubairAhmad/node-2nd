const express = require('express');
const cors = require('cors')
const app =express();
const port= 5000;



app.use(cors())
app.use(express.json());


const users =[
    {id:0, name:'jubair', email:'nam@gmail.com'},
    {id:1, name:'junir', email:'nam@gmail.com'},
    {id:2, name:'jmair', email:'nam@gmail.com'},
    {id:3, name:'juair', email:'nam@gmail.com'}
]


app.get('/users', (req, res)=>{
    const search=req.query.search;
    if(search){
        const searchresult= users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult);
    }
    else(res.send(users))
})

app.post('/users',(req, res)=>{
    const newUser=req.body;
    console.log(newUser);
    newUser.id=users.length;
    users.push(newUser)
    console.log("hitting the post", req.body);
    res.json(newUser)
})

app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user =users[id];
    res.send(user)
})

app.get('/', (req, res)=>{
    res.send("we are")
})

app.listen(port, () => {
    console.log('watching from', port);
});