/**
 * Servidor
 * @author Edhine
 */
'use strict';

import app from './app';
import { PORT_SERVER } from './config/ambiente';
import logger from 'node-color-log';

// Servidor Express
app.listen(PORT_SERVER, () => {

    logger.info('-----------------------------------------------------------');
    logger.info('\t\t\t\tApi Marvel');
    logger.info('\t\t   Autor: Sergio Andres Orellana Roa');
    logger.info('-----------------------------------------------------------\n');
    logger.info('-----------------------------------------------------------');
    logger.info(`\t\t     Servidor REST OK: Puerto ${PORT_SERVER}`);
    logger.info('-----------------------------------------------------------\n');

});


