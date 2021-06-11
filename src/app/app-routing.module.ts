import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component'; 

const routes: Routes =[
    { path: '', redirectTo: '/employees' , pathMatch: 'full'},
    { path: 'employees', component: EmployeeListComponent, children:[
        { path: 'userId/:id', 
            component: EmployeeDetailComponent}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ],
    exports:[RouterModule]
})
export class AppRoutingModule {}