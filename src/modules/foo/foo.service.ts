import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { Foo } from "../../models/foo";
import { Repository } from "typeorm/index";


@injectable()
class FooService {

    constructor(@inject(TYPES.FooRepository) private fooRepository: Repository<Foo>) {}

    public async get() {
        return await this.fooRepository.find();
    }

    public async post(message: string) {
        const foo = await this.fooRepository.create({bar: message});
        return await this.fooRepository.save(foo);
    }
}

export default FooService;