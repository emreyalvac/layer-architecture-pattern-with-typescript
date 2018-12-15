import DataAccess from "../dataAccess";
import {IBlog} from "../../model/interfaces/IBlog";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class BlogSchema {
	static get schema() {
		const schema = mongoose.Schema({
			title: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: true
			},
			author: {
				type: Number,
				required: true
			},
			category: {
				type: Number,
				required: true
			},
			createdDate: {
				type: Date,
				required: true
			},
			updatedDate: {
				type: Date,
				required: false
			}
		});
		return schema;
	}
}

export const blogSchema = mongooseConnection.model<IBlog>('Blog', BlogSchema.schema);
