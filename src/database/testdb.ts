import { IDbConnection } from "./db.interface";
import { Connection, createConnection } from "typeorm/index";
import { injectable } from "inversify";


@injectable()
class TestDbConnection implements IDbConnection {

    private connection!: Connection;

    constructor() {
        this.initialise();
    }

    public getConnection(): Connection {
        return this.connection;
    }

    async initialise() {
        this.connection = await createConnection('test');
    }

}

export default TestDbConnection;
