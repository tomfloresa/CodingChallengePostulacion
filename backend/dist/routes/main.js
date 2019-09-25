/*********************************************************************************************
 *                        Variables de enrutamiento de peticiones REST
 *                                   @author Sergio Orellana
 ********************************************************************************************/
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
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
const apiExterna_1 = __importDefault(require("./apiExterna"));
routes.use(apiExterna_1.default);
// Exportar las rutas
exports.default = routes;
//# sourceMappingURL=main.js.map