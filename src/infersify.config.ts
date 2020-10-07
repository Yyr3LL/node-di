import { AsyncContainerModule } from "inversify";
import { Repository } from "typeorm/index";
import { Foo } from "./models/foo";
import { TYPES } from './types';
import { getRepository } from "./repositories/foo.repository";
import { getDbConnection, statuses } from "./database/db";
import FooService from "./modules/foo/foo.service";

export const bindings = new AsyncContainerModule(async (bind) => {

    let status: statuses;

    if (process.argv.includes('test')) status = statuses.test;
    status = statuses.dev

    await getDbConnection(status);

    await require('./modules/index');

    bind<FooService>(TYPES.FooService).to(FooService);

    bind<Repository<Foo>>(TYPES.FooRepository).toDynamicValue(() => {
        return getRepository(status);
    }).inRequestScope();
})