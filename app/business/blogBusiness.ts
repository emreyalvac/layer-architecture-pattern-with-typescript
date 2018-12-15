import BlogRepository from "../repository/blogRepository";
import {IBlog} from "../model/interfaces/IBlog";
import {Types} from "mongoose";

export default class BlogBusiness {
	private _blogRepository: BlogRepository;

	constructor() {
		this._blogRepository = new BlogRepository();
	}

	create(item: IBlog, callback: (error: any, result: any) => void) {
		this._blogRepository.create(item, callback);
	}

	getById(id: Types.ObjectId, callback: (error: any, result: any) => void) {
		this._blogRepository.getById(id, callback);
	}

	get(callback: (error: any, result: any) => void) {
		this._blogRepository.get(callback);
	}

	update(id: Types.ObjectId, item: IBlog, callback: (error: any, result: any) => void) {
		this._blogRepository.update(id, item, callback);
	}

	delete(id: Types.ObjectId, callback: (error: any, result: any) => void) {
		this._blogRepository.delete(id, callback);
	}
}
