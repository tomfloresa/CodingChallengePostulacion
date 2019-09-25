/**
 * Controlador getApiMarvel
 * @author Sergio Orellana
 *
 * @method GET getApiMarvel
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const build_url_externo_1 = require("./../utils/build-url-externo");
/**
 * Metodo que realiza la transformacion y consulta al proveedor externo
 *
 * @param req [Request]
 * @param res [Response]
 */
exports.getApiMarvel = (req, res) => {
    axios_1.default
        .get(build_url_externo_1.buildUrl(req.url))
        .then(response => {
        res.status(response.status);
        res.json(response.data);
    })
        .catch(err => {
        res.status(500);
        res.send('Internal Server Error');
    });
};
//# sourceMappingURL=apiExternaController.js.map