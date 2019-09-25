"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_params_1 = require("url-params");
const crypto_1 = require("crypto");
const api_externa_1 = require("../config/api-externa");
function obtieneTimeStamp() {
    return Date.now() / 1000;
}
function generaHash(timestamp) {
    const preHash = timestamp + api_externa_1.API_MARVEL_PRIVATE_KEY + api_externa_1.API_MARVEL_PUBLIC_KEY;
    const hash = crypto_1.createHash('md5').update(preHash).digest('hex');
    return hash;
}
/**
 * Genera Ruta Base para las solicitudes a la API Externa
 * @param {string} request Request URL
 * @returns {string} url
 *
 * @example https://developer.marvel.com/documentation/authorization
 */
function buildUrl(requestUrl) {
    let url = `${api_externa_1.MARVEL_ENDPOINT}${requestUrl}`;
    const timestamp = obtieneTimeStamp();
    // Add timestamp
    url = url_params_1.add(url, 'ts', timestamp);
    // Add api key
    url = url_params_1.add(url, 'apikey', api_externa_1.API_MARVEL_PUBLIC_KEY);
    // Add hash
    url = url_params_1.add(url, 'hash', generaHash(timestamp));
    // Return url
    return url;
}
exports.buildUrl = buildUrl;
//# sourceMappingURL=build-url-externo.js.map