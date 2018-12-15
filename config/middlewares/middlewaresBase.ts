import * as express from 'express';
import * as bodyParser from 'body-parser';
import MethodOverride from "./methodOverride";
import {BaseRoutes} from "../routes/base/baseRoutes";

export class MiddlewaresBase {
	static get configuration() {
		const app = express();
		app.use(bodyParser.json())
		app.use(MethodOverride.configuration())
		app.use(new BaseRoutes().routes)
		return app;
	}
}
