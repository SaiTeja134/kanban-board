import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { RegisterComponent } from './register/register.component';
import { TaskFormComponent } from './task-form/task-form.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {provideHttpClient} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    KanbanBoardComponent,
    RegisterComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
  