/**
 * Servidor
 * @author Edhine
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const ambiente_1 = require("./config/ambiente");
const node_color_log_1 = __importDefault(require("node-color-log"));
// Servidor Express
app_1.default.listen(ambiente_1.PORT_SERVER, () => {
    node_color_log_1.default.info('-----------------------------------------------------------');
    node_color_log_1.default.info('\t\t\t\tApi Marvel');
    node_color_log_1.default.info('\t\t   Autor: Sergio Andres Orellana Roa');
    node_color_log_1.default.info('-----------------------------------------------------------\n');
    node_color_log_1.default.info('-----------------------------------------------------------');
    node_color_log_1.default.info(`\t\t     Servidor REST OK: Puerto ${ambiente_1.PORT_SERVER}`);
    node_color_log_1.default.info('-----------------------------------------------------------\n');
});
//# sourceMappingURL=api.js.map