/*********************************************************************************************
 *                                      Variables [AMBIENTE]
 *                                     @author Sergio Orellana
 ********************************************************************************************/
'use strict';

/**
 * [process.env] [NODE_ENV]
 * @description Variable de ambiente
 *
 * **dev**
 * **qa** => no implementada
 * **production**
 */
export const NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * [process.env] [PORT_SERVER]
 * @description Puerto A Exponer
 *
 * **Puerto 3000** => Defecto
 */
export const PORT_SERVER = process.env.PORT_SERVER || 3000;