import { controller, httpGet, httpPost, interfaces, request, requestBody, response } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from 'express';

import FooService from "./foo.service";
import { TYPES } from "../../types";


@controller('/foo')
export class FooController implements interfaces.Controller {

    constructor(@inject(TYPES.FooService) private fooService: FooService) {}

    @httpGet('/')
    private async get(@request() req: Request, @response() res: Response) {
        return res.send(await this.fooService.get());
    }

    @httpPost('/')
    private async post(@requestBody() body, @response() res: Response) {
        return res.status(201).send(await this.fooService.post(body.message));
    }

}