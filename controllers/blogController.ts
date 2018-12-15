import {Request, Response} from 'express';
import {IBlog} from "../app/model/interfaces/IBlog";
import BlogBusiness from "../app/business/blogBusiness";
import {Types} from "mongoose";

export class BlogController {
	public _blogBusiness: BlogBusiness;

	constructor() {
		this._blogBusiness = new BlogBusiness();
	}

	get(req: Request, res: Response) {
		try {
			this._blogBusiness.get((error, result) => {
				if (error) {
					res.status(404).send({error: "error"})
				}
				res.send(result);
			})

		} catch (e) {
			res.status(404).send({error: e});
		}

	}

	getById(req: Request, res: Response) {
		try {
			const _id: Types.ObjectId = req.params._id;
			this._blogBusiness.getById(_id, (error, result) => {
				if (error) {
					res.status(404).send({error: error});
				}
				res.send(result);
			})
		} catch (e) {
			res.status(404).send({error: e})
		}

	}

	create(req: Request, res: Response) {
		try {
			const blog: IBlog = <IBlog>req.body;
			this._blogBusiness.create(blog, ((error, result) => {
				if (error) {
					res.status(404).send({error: error});
				}
				res.send({success: "success"});
			}))
		} catch (e) {
			res.status(404).send({error: e});
		}
	}

	update(req: Request, res: Response) {
		try {
			const blog: IBlog = <IBlog>req.body;
			const _id: Types.ObjectId = req.params._id;
			this._blogBusiness.update(_id, blog, ((error, result) => {
				if (error) {
					res.status(404).send({error: error})
				}
				res.send({success: "success"});
			}))
		} catch (e) {
			res.status(404).send({error: e})
		}
	}

	delete(req: Request, res: Response) {
		try {
			const _id: Types.ObjectId = req.params._id;
			this._blogBusiness.delete(_id, (error, result) => {
				if (error) {
					res.status(404).send({error: error});
				}
				res.send({success: "success"});
			})

		} catch (e) {
			res.status(404).send({error: e});
		}

	}


}
