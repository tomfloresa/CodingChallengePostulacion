/**
 * Rutas API Rest De Api Externa
 * @author Sergio Orellana
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ApiExternaControlador = __importStar(require("../controllers/apiExternaController"));
const api = express_1.default.Router();
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
exports.default = api;
//# sourceMappingURL=apiExterna.js.map