import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  standalone: false,
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent implements OnInit {
  todo: Task[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];
  tasks: any[] = [];

  constructor(private taskService: TaskService,private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks():void{
    this.taskService.getTasks().subscribe(
      tasks => {
        this.tasks = tasks;
        console.log(this.tasks);
        this.todo = tasks.filter(task => task.status === 'To Do');
        this.inprogress = tasks.filter(task => task.status === 'In Progress');
        this.done = tasks.filter(task => task.status === 'Done');

      }
    )
  }

  drop(event: CdkDragDrop<Task[]>): void {

    const task = event.previousContainer.data[event.previousIndex];

    const mapStatus: { [key: string]: string } = {
      todoList: 'To Do',
      inprogressList: 'In Progress',
      doneList: 'Done'
    }
    
    task.status = mapStatus[event.container?.id] || task.status;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
      this.taskService.updateTaskStatus(task._id, task.status).subscribe({
        complete: () => console.log('Task update successfully'),
        error: (error) => console.log('Error updating')
      })
    }
  }

  delete(id:number):void{
    this.taskService.deleteTask(id).subscribe(() => {
     this.loadTasks();
    })
  }

  edit(id:number):void{
    this.router.navigate(['/task-form',id]);
  }

  taskForm():void{
    this.router.navigate(['/task-form']);
  }

  getTasksForStage(stage:string):any[]{
    return this.tasks.filter((task) => task.status===stage);
  }
}
