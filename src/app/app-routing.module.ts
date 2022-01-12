import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employee', component:EmployeeListComponent},
  {path:'create-component', component:CreateComponentComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'update-employee/:id', component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
