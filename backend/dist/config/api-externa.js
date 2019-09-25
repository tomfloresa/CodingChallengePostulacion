/************************************************************************************************************
 *                                            Variables [API EXTERNA]
 *                                            @author Sergio Orellana
 *
 * **PD: Deje las importaciones separadas para agrupar las configuraciones, solo por comodidad a la vista**
 ***********************************************************************************************************/
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [MARVEL_ENDPOINT] [API EXTERNA]
 * @description Ruta de API EXTERNA de Marvel
 *
 */
exports.MARVEL_ENDPOINT = 'https://gateway.marvel.com/v1/public';
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const node_color_log_1 = __importDefault(require("node-color-log"));
/**
 * [PUBLIC_KEY] [API MARVEL Credencial Publica]
 * [PRIVATE_KEY] [API MARVEL Credencial Privada]
 * @description Credenciales para la API de Marvel
 *
 */
if (fs_1.default.existsSync('.env')) {
    node_color_log_1.default.debug('Se ha encontrado archivo .env, se procede a cargar las variables');
    dotenv_1.default.config({ path: '.env' });
}
exports.API_MARVEL_PUBLIC_KEY = process.env.API_MARVEL_PUBLIC_KEY;
exports.API_MARVEL_PRIVATE_KEY = process.env.API_MARVEL_PRIVATE_KEY;
//# sourceMappingURL=api-externa.js.map