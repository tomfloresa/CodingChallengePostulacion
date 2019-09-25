/**
 * Controlador getApiMarvel
 * @author Sergio Orellana
 *
 * @method GET getApiMarvel
 */
'use strict';

import axios from 'axios';
import { Request, Response } from 'express';
import { buildUrl } from './../utils/build-url-externo';

/**
 * Metodo que realiza la transformacion y consulta al proveedor externo
 *
 * @param req [Request]
 * @param res [Response]
 */
export let getApiMarvel = (req: Request, res: Response) => {
    axios
        .get(buildUrl(req.url))
        .then(response => {
            res.status(response.status);
            res.json(response.data);
        })
        .catch(err => {
            res.status(500);
            res.send('Internal Server Error');
        });
};