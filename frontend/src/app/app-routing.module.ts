import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'kanban',component:KanbanBoardComponent},
  {path:'login',component:LoginComponent},
  {path:'employee-detail/:id',component:EmployeeDetailComponent},
  {path:'edit-form',component:EmployeeFormComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'task-form',component:TaskFormComponent},
  {path:'task-form/:id',component:TaskFormComponent},
  {path:'employee-form/:id',component:EmployeeFormComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

