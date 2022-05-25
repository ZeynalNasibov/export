import express from 'express';
// const res = require('express/lib/response');
const app = express();
const person=[
    {
        "id":1,
        "name":"Zeynal",
        "age":21
    },
    {
        "id":2,
        "name":"Elnur",
        "age":21
    },
    {
        "id":3,
        "name":"Samir",
        "age":21
    }
]
app.get('/person', (req, res)=>{
    res.send(person)
})

app.listen(5000, function(){
    console.log('Example app listening on port 5000!')
})