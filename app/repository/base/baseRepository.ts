import {Document, Model, Types} from 'mongoose';
import {IBase} from "../interfaces/IBase";

export default class BaseRepository<T extends Document> implements IBase<T> {

	private _model: Model<Document>;

	constructor(schemaModel: Model<Document>) {
		this._model = schemaModel;
	}

	create(item: T, callback: (error: any, result: Document) => void) {
		this._model.create(item, callback);
	}

	get(callback: (error: any, result: T[]) => void) {
		this._model.find({}, callback);
	}

	update(id: Types.ObjectId, item: T, callback: (error: any, result: boolean) => void) {
		this._model.update({_id: id}, item, callback);
	}

	delete(id: Types.ObjectId, callback: (error: any, result: boolean) => void) {
		this._model.deleteOne({_id: id}, (err) => callback(err, null));
	}

	getById(id: Types.ObjectId, callback: (error: any, result: T) => void) {
		this._model.find({_id: id}, callback);
	}
}
