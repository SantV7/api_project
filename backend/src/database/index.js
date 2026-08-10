import { Sequelize } from 'sequelize';

import databaseConfig from '../config/db.cjs';


class Database {
    constructor() {
        this.launcher();
    }

    launcher() {
        this.connection = new Sequelize(databaseConfig)
    }
}

export const init = new Database();