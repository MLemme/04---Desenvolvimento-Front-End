import mock from "./mock.json" with { type: "json" };

const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;

class Connection {
    constructor() {
    }
    mock() {
        return mock;
    }
}
export default new Connection();