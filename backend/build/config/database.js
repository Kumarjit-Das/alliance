"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "alliance",
    entities: [],
    logging: true,
    synchronize: true,
});
