import {Types} from 'mongoose';

export interface IBase<T> {
	get: (callback: (error: any, result: T[]) => void) => void
	getById: (id: Types.ObjectId, callback: (error: any, result: T) => void) => void
	create: (item: T, callback: (error: any, result: any) => void) => void
	update: (id: Types.ObjectId, item: T, callback: (error: any, result: boolean) => void) => void
	delete: (id: Types.ObjectId, callback: (error: any, result: boolean) => void) => void
}
