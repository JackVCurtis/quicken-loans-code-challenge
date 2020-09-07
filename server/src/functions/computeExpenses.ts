import {ExpensesRequest} from '../api';

export const computeExpenses = (expenseRequest: ExpensesRequest): {[name: string]: number} => {
    const expensesPerStudent = expenseRequest.students.reduce((acc, student) => {
        acc[student.name] = student.expenses.reduce((acc, expense) => acc + expense.cost, 0);
        return acc;
    }, <{[index:string]: number}>{});

    const totalExpense = Object.values(expensesPerStudent).reduce((acc, v) => acc + v, 0);
    const avgExpense = totalExpense / Object.keys(expensesPerStudent).length;
    const owedPerStudent = Object.keys(expensesPerStudent).reduce((acc, studentName) => {
        acc[studentName] = expensesPerStudent[studentName] - avgExpense;
        return acc;
    }, <{[index:string]: number}>{});

    return owedPerStudent;
}