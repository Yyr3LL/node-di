import { getConnection } from "typeorm/index";
import { Foo } from "../models/foo";
import { statuses } from "../database/db";

export function getRepository(status: statuses) {
    const conn = getConnection(status);
    const fooRepository = conn.getRepository(Foo);
    return fooRepository;
}