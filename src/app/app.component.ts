import { Component } from '@angular/core';  
import { EmployeeServices } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employee: EmployeeServices){}
  title = 'services';
  emp_id=null;
  emp_name=null;
  emp_dept=null;
  myEmployee={
    id:1,
    name:'',
    dept:''
  }
  addemployee(){
    this.myEmployee.id=this.emp_id;
    this.myEmployee.name=this.emp_name;
    this.myEmployee.dept=this.emp_dept;
    this.employee.setemployee(this.myEmployee);
  }
  }

