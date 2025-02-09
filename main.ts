import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { handle, handleError, initViews } from './helpers';

async function start() {
	try {
		const app = express();

		//создаем шаблон
		initViews();

		//устанавливаем двожок на hanlebars
		app.set('view engine', 'hbs');

		//CORS на все
		app.options('*', cors());

		//парсить body у json
		app.use(bodyParser.json({ limit: '50mb' }));

		//единственный обработчик маршрута
		app.use('/', handle);
		//в крайнем случае, обоработчик ошибок
		app.use(handleError);

		const listenCallback = () =>
			console.log(`🚀 App listening at http://localhost:3000`);

		app.listen(3000, listenCallback);
	} catch (error: any) {
		console.log('О нет', error);
	}
}
start();
