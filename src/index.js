const express = require('express');
const app = express();
const routes = require('./application/routes/index.js');

//Midlleware
app.use('/', routes);
app.use(express.json());


//Server
app.listen(3000, ()=>{
    console.log('El puerto esta funcionando correctamente.');
});