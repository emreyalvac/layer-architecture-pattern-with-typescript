import {Document} from "mongoose";

export interface IBlog extends Document {
	/**
	 * Title
	 * @String
	 */
	title: string;
	/**
	 * Content
	 * @String
	 */
	content: string;
	/**
	 * Author
	 * @Number
	 */
	author: number;
	/**
	 * Category
	 * @Number
	 */
	category: number;
	/**
	 * Created Date
	 * @Date
	 */
	createdDate: Date;
	/**
	 * Updated Date
	 * @Date
	 */
	updatedDate: Date;
}
