import { controller, httpGet, httpPost, interfaces, request, requestBody, response } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from 'express';

import FooService from "./foo.service";
import { TYPES } from "../../types";


@controller('/foo')
export class FooController implements interfaces.Controller {

    constructor(@inject(TYPES.FooService) private fooService: FooService) {}

    @httpGet('/')
    private get(@request() req: Request, @response() res: Response) {
        return res.send(this.fooService.get());
    }

    @httpPost('/')
    private post(@requestBody() body, @response() res: Response) {
        return res.status(201).send(this.fooService.post(body.message));
    }

}