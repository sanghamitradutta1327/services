import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor(private employee: EmployeeServices) { }

  ngOnInit() {
    this.EmpDetail=this.employee.getemployee();
  }
 EmpDetail=[]
}
