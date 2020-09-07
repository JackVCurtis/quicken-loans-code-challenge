import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExpensesComponent } from './student-expenses.component';

describe('StudentExpensesComponent', () => {
  let component: StudentExpensesComponent;
  let fixture: ComponentFixture<StudentExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
