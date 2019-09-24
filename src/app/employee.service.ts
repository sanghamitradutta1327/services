import { Injectable } from '@angular/core';
 
@Injectable(
)

export class EmployeeServices{

employee=[
    {id: 1,name :'abc',dept:'CSE'},
    {id: 2,name :'XYZ',dept:'CE'},
    {id: 3,name :'DEF',dept:'ME'}
]
getemployee()
{
    return this.employee;
}
setemployee(emp)
{
    this.employee.push(emp);

}
}
