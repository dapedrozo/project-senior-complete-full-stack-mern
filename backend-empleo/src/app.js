//hoja de creacion del server con express
const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());

//router
app.use('/api-empleo/postulado', require('./routes/postulado'))
//router caracteristicas hoja de vida (estado laboral, programas de gobierno, idiomas, etc)
//para funcionario pero en ruta y hojas separadas
app.use('/api-empleo/postuladoCaractHv', require('./routes/caracteristicasHV'))
//route "only-employee"
app.use('/api-empleo/funcionario', require('./routes/funcionario'))

module.exports= app;