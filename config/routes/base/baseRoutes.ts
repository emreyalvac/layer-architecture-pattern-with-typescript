import * as express from 'express'
import {BlogRoutes} from "../blogRoutes";

const app = express();

export class BaseRoutes {
	get routes() {
		app.use('/', new BlogRoutes().routes)
		return app;
	}
}

