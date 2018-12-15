import BaseRepository from "./base/baseRepository";
import {IBlog} from "../model/interfaces/IBlog";
import {blogSchema} from "../dataAccess/schemas/blogSchema";

export default class BlogRepository extends BaseRepository<IBlog> {
	constructor() {
		super(blogSchema);
	}
}
