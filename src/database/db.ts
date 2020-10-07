import { createConnection } from "typeorm/index";

export enum statuses {
    dev = 'dev',
    test = 'test'
}

export async function getDbConnection(status: statuses) {
    return await createConnection(status);
}

