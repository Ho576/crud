const express = require('express');
const app = express();

const Routers = require('./routers/routers');

app.use(Routers);

app.listen(4000,()=>{
    console.log('server is running on port 4000');
})

