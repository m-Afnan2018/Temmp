const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: 'Server Started Successfully',
        secret: process.env.REACT_APP_BASE_URL,
    })
})

app.listen(4000, ()=>{
    console.log('Server is running at port 4000');
})