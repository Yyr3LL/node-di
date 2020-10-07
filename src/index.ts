import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import './modules/index';
import { bindings } from "./infersify.config";


// class Server {
//
//     private readonly container: Container;
//     private readonly server: InversifyExpressServer;
//
//     constructor() {
//         this.container = new Container();
//         this.setContainer();
//         this.server = new InversifyExpressServer(this.container);
//         this.setConfig();
//     }
//
//     public async setContainer() {
//         await this.container.loadAsync(bindings);
//     }
//
//     private setConfig() {
//         this.server.setConfig((app) => {
//             app.use(bodyParser.urlencoded({
//                 extended: true
//             }));
//             app.use(bodyParser.json());
//         });
//     }
//
//     public start() {
//         const app = this.server.build();
//         app.listen(3000);
//     }
//
// }

(async () => {
    const container: Container = new Container();
    await container.loadAsync(bindings);
    const app = new InversifyExpressServer(container);
    app.setConfig((app) => {
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
    })
    const server = app.build();

    server.listen(3000, () => {
        console.log('server is running on 3000 port');
    })
})();
