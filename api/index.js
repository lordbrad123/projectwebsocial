'use strict'

var mongoose = require ('mongoose');
var app = require('./app');
var port = 3800;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/web_social')
        .then(() => {console.log('Prueba Conexión de la base de datos web social')
//crear servidor 
app.listen(port,() => {
        console.log('Servidor corriendo en http://localhost:3800')
})

})
        .catch(error => console.log(error));