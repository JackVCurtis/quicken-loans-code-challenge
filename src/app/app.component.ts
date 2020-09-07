import { Component } from '@angular/core';
import { StateService } from './state.service';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newStudentForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(public stateService: StateService,
              private http: HttpClient) {
  }

  addStudent() {
    this.stateService.addStudent(this.newStudentForm.value.name);
    this.newStudentForm.setValue({name: ''});
  }

  deleteStudent(i: number) {
    this.stateService.deleteStudent(i);
  }

  calculateExpenses() {
    if (this.stateService.state.students.length < 2) {
      this.stateService.state.errorMessage = 'At least two students are needed';
    } else {
      this.stateService.state.isCalculating = true;
      this.stateService.state.errorMessage = undefined;

      this.http.post('/api/expenses/compute', {students: this.stateService.state.students})
        .subscribe((res: {[name: string]: number}) => {
          this.stateService.state.isCalculating = false;
          this.stateService.state.amountsOwedVisible = true;
          this.stateService.state.amountsOwed = Object.keys(res).map( k => {
            return {studentName: k, amount: Math.abs(res[k]), type: res[k] >= 0 ? 'owed' : 'owes'}
          });
        })
    }
  }
}
