import * as express from 'express';
import {MiddlewaresBase} from "./config/middlewares/middlewaresBase";

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 5000;
app.set('port', PORT);
app.use(MiddlewaresBase.configuration)

app.listen(PORT, () => {
	console.log(`Node app is running at localhost ${PORT}`)
})
