import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../models/student';
import { StateService } from '../state.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-expenses',
  templateUrl: './student-expenses.component.html',
  styleUrls: ['./student-expenses.component.scss']
})
export class StudentExpensesComponent {
  @Input()
  student: Student;
  @Input()
  index: number;

  newExpenseForm = new FormGroup({
    cost: new FormControl(null),
    desc: new FormControl('')
  })

  constructor(private stateService: StateService) { }

  deleteStudent() {
    this.stateService.deleteStudent(this.index);
  }

  addExpense($event) {
    const values = this.newExpenseForm.value;
    this.stateService.addExpense(this.index, values.cost, values.desc);
    this.newExpenseForm.setValue({cost: null, desc: ''});
  }

  deleteExpense(index) {
    this.stateService.deleteExpense(this.index, index);
  }
}
