require('dotenv').config();

const { error } = require('console');
//libreria de express
const express = require('express');
const  app = express();

require('./database');
//libreria para el path
const path = require('path');

//vistas
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//midlewhere

app.use(express.urlencoded({extended: false}));


//routes
app.use('/', (req, res)=>{
    res.render('index');
});


//static file
app.set(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, ()=>console.log('Servidor Ejecutado'));
