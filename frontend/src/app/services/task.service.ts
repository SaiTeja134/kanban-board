import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly apiUrl = 'http://localhost:3000/tasks';
  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  getTask(id:string): Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }
  addTask(newTask: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,newTask);
  }

  updateTaskStatus(id:number,status:string): Observable<Task>
  {
    return this.http.patch<Task>(`${this.apiUrl}/${id}`,{ status });
  }

  updateTask(updatedTask: Task): Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${updatedTask._id}`,updatedTask);
  }
  deleteTask(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
