import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  users:User[]=[];
  user: User = JSON.parse(localStorage.getItem("user") || '{}');
  role:string='';

  fullName:string='';
  position:string='';
  department:string='';
  phoneNumber:string='';

  isFilter:boolean = false;

  constructor(private userService:UserService,private router:Router){

  }

  ngOnInit(): void {
    if (!this.user || !this.user.role) {
      this.role = "guest";
    } else {
      this.role = this.user.role;
    }
  
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.users = data;
    })
  }

  deleteEmployee(id:number){
    this.userService.deleteUser(id).subscribe(() =>{
      this.loadUsers();
    })
  
  }
  viewEmployee(id:number):void{
    this.router.navigate(['/employee-detail',id]);
  }
 
  editEmployee(id:number):void{
    this.router.navigate(['/employee-form',id]);
  }

  toggle():void{
    this.isFilter = true;
  }
}
