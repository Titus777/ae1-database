const express = require('express');

const app = express()

app.get('/', (req,res)=>{
    res.send("Crud Application");
})

app.listen(2020,()=>{console.log('Server is running on http://localhost:2020')});
