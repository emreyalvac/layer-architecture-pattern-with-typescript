import * as express from 'express';
import {BlogController} from "../../controllers/blogController";

const router = express.Router();

export class BlogRoutes {
	private _blogController: BlogController;

	constructor() {
		this._blogController = new BlogController();
	}

	get routes() {
		router.get('/blog/get', this._blogController.get)
		router.post('/blog/create', this._blogController.create)
		router.put('/blog/update/:_id', this._blogController.update)
		router.get('/blog/id/:_id', this._blogController.getById)
		router.delete('/blog/delete/:_id', this._blogController.delete)

		return router;
	}
}
