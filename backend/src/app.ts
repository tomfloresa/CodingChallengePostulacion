/**
 * Configuracion y preparacion APP
 * @author Edhine
 *
 * **PD: Deje las importaciones separadas para agrupar las configuraciones**
 */

// Express
import express from 'express';
const app = express();

// Logger REST
import morgan from 'morgan';
app.use(morgan('combined'));

/***********************************************
 * Habilitador de Cross-origin resource sharing
 *         @access REST (Middleware)
 **********************************************/
import cors from 'cors';
app.use(cors());

// Middleware (Parser JSON)
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Levantamiento Enrutador REST
import routes from './routes/main';
app.use(routes);

// Exportar
export default app;