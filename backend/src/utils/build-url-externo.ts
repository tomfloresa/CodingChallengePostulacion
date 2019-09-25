import { add } from 'url-params';
import { createHash } from 'crypto';
import { MARVEL_ENDPOINT, API_MARVEL_PUBLIC_KEY, API_MARVEL_PRIVATE_KEY } from '../config/api-externa';

function obtieneTimeStamp() {
    return Date.now() / 1000;
}

function generaHash(timestamp: number): string {
    const preHash = timestamp + API_MARVEL_PRIVATE_KEY + API_MARVEL_PUBLIC_KEY;
    const hash = createHash('md5').update(preHash).digest('hex');
    return hash;
}

/**
 * Genera Ruta Base para las solicitudes a la API Externa
 * @param {string} request Request URL
 * @returns {string} url
 *
 * @example https://developer.marvel.com/documentation/authorization
 */
export function buildUrl(requestUrl: string): string {
    let url = `${MARVEL_ENDPOINT}${requestUrl}`;
    const timestamp = obtieneTimeStamp();
    // Add timestamp
    url = add(url, 'ts', timestamp);
    // Add api key
    url = add(url, 'apikey', API_MARVEL_PUBLIC_KEY);
    // Add hash
    url = add(url, 'hash', generaHash(timestamp));
    // Return url
    return url;
}

