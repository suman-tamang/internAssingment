import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { employee } from '../employee/employee-list/employee-list.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = "https://60b5b568fe923b0017c8475e.mockapi.io/api/ang/employee";
  employeeDataEmmitter = new Subject<employee>();
  
  constructor(private http: HttpClient) { }

  fetchEmployees(){
    return this.http.get<any>(this.urlApi);
  }
  
}
