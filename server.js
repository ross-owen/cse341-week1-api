const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
