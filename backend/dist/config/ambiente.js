/*********************************************************************************************
 *                                      Variables [AMBIENTE]
 *                                     @author Sergio Orellana
 ********************************************************************************************/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [process.env] [NODE_ENV]
 * @description Variable de ambiente
 *
 * **dev**
 * **qa** => no implementada
 * **production**
 */
exports.NODE_ENV = process.env.NODE_ENV || 'dev';
/**
 * [process.env] [PORT_SERVER]
 * @description Puerto A Exponer
 *
 * **Puerto 3000** => Defecto
 */
exports.PORT_SERVER = process.env.PORT_SERVER || 3000;
//# sourceMappingURL=ambiente.js.map