import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: employee[] = [];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.fetchEmployees()
      .subscribe(response =>{
        this.employees = response.Employees;
      },error=>{
        console.log("something went wrong");
      });
  }

  onClickedEmployee(id){
    this.router.navigate(['employees/userId/'+id]);
  }
}

export interface employee {
  "userId": "",
  "jobTitleName": "",
  "firstName": "",
  "lastName": "",
  "preferredFullName": "",
  "employeeCode": "",
  "region": "",
  "phoneNumber": "",
  "emailAddress": ""
}