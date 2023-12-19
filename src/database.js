const mongoose = require('mongoose');

//string de cadena de conexion
const { MONGODB_URL } = process.env;


mongoose.connect(MONGODB_URL, {
   // useNewUrlParser: true,
   // useUnifiedTopology: true,

}).then(db => console.log('base de datos conectada'))
.catch(err => console.log(err)); 