import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm:FormGroup;
  taskId:string='';
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private taskService:TaskService,private router: Router) {

    this.taskForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      deadline:[null,Validators.required],
      status:['',Validators.required]
    })
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((v) => {
      this.taskId = (v.get('id') ?? '');
      console.log(this.taskId);
      if(this.taskId){        
        this.taskService.getTask(this.taskId).subscribe((task) => {
          this.taskForm.patchValue(task);
        })
    }
  }
  );
  }

 

  onSubmit():void{
    if(this.taskForm.valid)
    {
      let task = this.taskForm.value;
      console.log(this.taskId);
      if(this.taskId)
      {
        task = {...task,_id:this.taskId};
        this.taskService.updateTask(task).subscribe({
          complete: () => this.router.navigate(['/kanban'])
        }
        );
      }
      else
      {
        this.taskService.addTask(task).subscribe(() => {
          this.router.navigate(['/kanban']);
        });
      }
    }
  }
}
