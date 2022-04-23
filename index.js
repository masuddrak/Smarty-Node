const express = require('express');
const app=express()
var cors = require('cors')
const port=process.env.PORT || 5000

app.use(cors())
// resivetable adata undefind solution
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello my smarty life hello auto rester')
})
const users=[
    {id:1,name:'sakib',email:"sakib@gmail.com",phon:0265555554},
    {id:2,name:'rayhan',email:"rayhan@gmail.com",phon:0265555554},
    {id:3,name:'biplob',email:"biplop@gmail.com",phon:0265555554},
    {id:4,name:'kudus',email:"kudus@gmail.com",phon:0265555554},
]
app.get('/users',(req,res)=>{

    console.log("search query",req.query)
    if(req.query){
       const search=req.query.name.toLowerCase()
        const marched=users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(marched)
    }
    res.send(users)

})
app.get('/user/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    res.send(users.find(user=>user.id===id))
})

app.post('/user',(req,res)=>{
   
    const user=req.body
    user.id=users.length+1;
    users.push(user)
    res.send(user)
})


app.listen(port,()=>{
    console.log('express node smarty file',port)
})

