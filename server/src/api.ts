import Router from 'koa-router';
import {Student} from '../../models/student';
import {computeExpenses} from './functions/computeExpenses';
const api = new Router();

export interface ExpensesRequest {
    students: Student[]
}

api.post('/expenses/compute', async (ctx, next) => {
    const req: ExpensesRequest = ctx.request.body;
    ctx.body = computeExpenses(req);
    await next();
})

export default api;