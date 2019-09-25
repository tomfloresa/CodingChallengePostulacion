/**
 * Rutas API Rest De Api Externa
 * @author Sergio Orellana
 */
'use strict';

import express from 'express';
import * as ApiExternaControlador from '../controllers/apiExternaController';

const api = express.Router();

/**
 * API Rest Todos los Personajes Api Marvel
 * @method GET
 */
api.get('/characters', ApiExternaControlador.getApiMarvel);

/**
 * API Rest Personajes Por (PERSONAJE ID) Api Marvel
 * @method GET
 */
api.get('/characters/:characterId', ApiExternaControlador.getApiMarvel);

/**
 * API Rest Comics De un Personaje por (PERSONAJE ID) Api Marvel
 * @method GET
 */
api.get('/characters/:characterId/comics', ApiExternaControlador.getApiMarvel);

/**
 * API Rest Comics por (COMICS ID) Api Marvel
 * @method GET
 */
api.get('/comics/:comicsId', ApiExternaControlador.getApiMarvel);

export default api;