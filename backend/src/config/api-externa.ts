/************************************************************************************************************
 *                                            Variables [API EXTERNA]
 *                                            @author Sergio Orellana
 *
 * **PD: Deje las importaciones separadas para agrupar las configuraciones, solo por comodidad a la vista**
 ***********************************************************************************************************/
'use strict';

/**
 * [MARVEL_ENDPOINT] [API EXTERNA]
 * @description Ruta de API EXTERNA de Marvel
 *
 */
export const MARVEL_ENDPOINT = 'https://gateway.marvel.com/v1/public';


import dotenv from 'dotenv';
import fs from 'fs';
import logger from 'node-color-log';

/**
 * [PUBLIC_KEY] [API MARVEL Credencial Publica]
 * [PRIVATE_KEY] [API MARVEL Credencial Privada]
 * @description Credenciales para la API de Marvel
 *
 */
if (fs.existsSync('.env')) {
    logger.debug('Se ha encontrado archivo .env, se procede a cargar las variables');
    dotenv.config({ path: '.env' });
}

export const API_MARVEL_PUBLIC_KEY = process.env.API_MARVEL_PUBLIC_KEY;
export const API_MARVEL_PRIVATE_KEY = process.env.API_MARVEL_PRIVATE_KEY;
