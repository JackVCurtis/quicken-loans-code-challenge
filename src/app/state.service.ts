import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { Balance } from 'models/balance';

interface State {
  isCalculating: boolean;
  students: Student[];
  amountsOwedVisible: boolean;
  amountsOwed: Balance[];
  errorMessage: string|undefined;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  state: State = {
    isCalculating: false,
    students: [],
    amountsOwedVisible: false,
    amountsOwed: [],
    errorMessage: undefined,
  };

  constructor() { }

  addStudent(name: string) {
    this.state.students.push({name: name, expenses: []});
  }

  deleteStudent(i: number) {
    this.state.students.splice(i, 1);
  }

  addExpense(studentIndex: number, expenseCost: number, expenseDesc: string) {
    this.state.students[studentIndex].expenses.push({cost: expenseCost, desc: expenseDesc});
  }
}
