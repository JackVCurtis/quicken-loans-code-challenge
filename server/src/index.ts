import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
import staticServer from 'koa-static';
import Router from 'koa-router'

import api from './api';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(staticServer(__dirname + '/static'));

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods);

app.listen(8000);
