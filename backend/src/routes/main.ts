/*********************************************************************************************
 *                        Variables de enrutamiento de peticiones REST
 *                                   @author Sergio Orellana
 ********************************************************************************************/
'use strict';

import express from 'express';
const routes = express.Router();

/*********************************************************************************************
 *                                             Rutas
 *
 * @description => Instancia de las rutas disponibles para la API
 ********************************************************************************************/

/**
 * @TestRest
 * [RutaDePrueba]
 * @description Rest De Prueba Inicial, solo devuelve un modelo establecido
 */
import api from './apiExterna';
routes.use(api);

// Exportar las rutas
export default routes;