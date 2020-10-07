import { Connection, Repository } from "typeorm/index";

export interface IDbConnection{
    getConnection(): Connection;
}