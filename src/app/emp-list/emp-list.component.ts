import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private employee:EmployeeServices) { }

  ngOnInit() {
    this.EmpDetail=this.employee.getemployee();


  }
    
  EmpDetail=[];
  

}
