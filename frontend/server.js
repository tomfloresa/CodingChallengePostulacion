/* SERVIDOR EXPRESS, PARA PRODUCTIVO */

// VARIABLES
const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nameAPP = require('./package.json')['name'];

// INSTANCIA EXPRESS
const app = express();
console.log(colors.blue('Express: '), colors.green('Inicializado'));

app.use(bodyParser.urlencoded({
    extended: false
}));
console.log(colors.blue('Middleware: '), colors.green('Inicializado'));

app.use(bodyParser.json());
console.log(colors.blue('Body Parser: '), colors.green('Inicializado'));

// LEVANTAMIENTO DE ANGULAR
app.use(express.static(__dirname + `/dist/${nameAPP}`));
console.log(colors.blue('Directorio Estatico: '), colors.green('Inicializado'));

// PETICION PARA DEVOLVER LOS ARCHIVOS A CUALQUIER RUTA
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + `/dist/${nameAPP}/index.html`)); });
console.log(colors.blue('Carga De Index.html: '), colors.green('Inicializado'));

// INIT SERVIDOR
app.listen(process.env.PORT_WEB || 4200, () => console.log(colors.green('\nAPP Levantada =)!')));