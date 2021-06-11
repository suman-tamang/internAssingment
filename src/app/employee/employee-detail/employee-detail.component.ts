import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute , Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { employee } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  people: employee [] = [];
  selectedEmployee: employee;
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.fetchEmployees()
      .subscribe(response=>{
        
        this.people = response.Employees;
        this.route.params
          .subscribe((params: Params) =>{
            console.log(this.route.snapshot.params['id']);
            this.people.forEach(element => {

              if (element.userId === params['id']){
                this.selectedEmployee = element;
              }
            });

          });
      });
  }
}
