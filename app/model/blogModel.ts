import {IBlog} from "./interfaces/IBlog";

export default class BlogModel {
	private _blogModel: IBlog;

	constructor(blogModel: IBlog) {
		this._blogModel = blogModel;
	}

	get title(): string {
		return this._blogModel.title;
	}

	get content(): string {
		return this._blogModel.content;
	}

	get author(): number {
		return this._blogModel.author;
	}

	get category(): number {
		return this._blogModel.category;
	}

	get createdDate(): Date {
		return this._blogModel.createdDate;
	}

	get updatedDate(): Date {
		return this._blogModel.updatedDate;
	}
}
