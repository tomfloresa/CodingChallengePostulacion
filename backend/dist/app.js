"use strict";
/**
 * Configuracion y preparacion APP
 * @author Edhine
 *
 * **PD: Deje las importaciones separadas para agrupar las configuraciones**
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// Logger REST
const morgan_1 = __importDefault(require("morgan"));
app.use(morgan_1.default('combined'));
/***********************************************
 * Habilitador de Cross-origin resource sharing
 *         @access REST (Middleware)
 **********************************************/
const cors_1 = __importDefault(require("cors"));
app.use(cors_1.default());
// Middleware (Parser JSON)
const body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// Levantamiento Enrutador REST
const main_1 = __importDefault(require("./routes/main"));
app.use(main_1.default);
// Exportar
exports.default = app;
//# sourceMappingURL=app.js.map