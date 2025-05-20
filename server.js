const express = require('express'); // Se llama la dependencia del Framework
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); // Creamos una instancia de express

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // CARGAMOS LAS VARIABLES DE ENTORNO
}


app.set('port', process.env.PORT || 4000);

app.use(morgan('combinedZ'));
// Permite recibir datos de el formulario
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());// Permite recibir solicitudes en JSON


//rutas
//rutas de usuarios para la v1 del API
app.use('/api/v1/users',require('./api/v1/user.routes'));


//Rutas del API
// app.get('/', (req, res) => {
//     //req = request => es la peticion del usuario
//     //res = response => es la respuesta del servidor al usuario
//     res.send({
//         'status': 200,
//         'message': 'prueba de API exitosa'
//     })
// });
// app.get('/saludos', (req, res) => {
//     //req = request => es la peticion del usuario
//     //res = response => es la respuesta del servidor al usuario
//     res.send({
//         'status': 200,
//         'message': 'Hello ADSO!'
//     })
// });
// app.post('/newUserTest', (req, res) => {
//     // console.log(req);

    // console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const direccion = req.body.direccion;
    // const empresa = req.body.empresa;
    // const telefono = req.body.telefono;
    // const{name, email, direccion, empresa, telefono} = req.body

    // console.log(`'nombre':${name}`)
    // console.log(`'email':${email}`)
    // console.log(`'direccion':${direccion}`)
    // console.log(`'empresa':${empresa}`)
    // console.log(`'telefono':${telefono}`)
    // res.send({
    //     "status" : 201,
    //     "mesage" : "usuario creado con exito"
    // })
//})
app.use('/api/users', require('./api/users')); // Ruta para users

//Se inicializa el servidor
app.listen(app.get('port'), () => {
    console.log(`el servidor esta corriendo en el puerto ${app.get('port')} 🐼`);
})