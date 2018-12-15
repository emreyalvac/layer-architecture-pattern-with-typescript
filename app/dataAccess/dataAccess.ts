import {Connection, connection, connect} from "mongoose";
import Constants from "../../config/constants/constants";

export default class DataAccess {
	static mongooseInstance: any;
	static mongooseConnection: Connection;

	constructor() {
		DataAccess.connect();
	}

	static connect(): Connection {
		if (this.mongooseInstance) return this.mongooseConnection;

		this.mongooseInstance = connection;
		this.mongooseConnection.once('open', () => {
			console.log('Connected to MongoDB');
		})

		this.mongooseInstance = connect(Constants.DB_CONNECTION_STRING);
		return this.mongooseInstance;
	}
}

DataAccess.connect()
