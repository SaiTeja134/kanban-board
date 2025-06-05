import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  user:User={
    username:'',
    position:'',
    department:'',
    phoneNumber:''
  }
  editingIndex:number=-1;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService){
  }
  
  ngOnInit(): void {
    this.editingIndex = this.route.snapshot.params['id'];   
    this.getEmpolyeeDetails();
  }

  getEmpolyeeDetails():void{
    this.userService.getUserById(this.editingIndex).subscribe((v) => {
      this.user = v;
    })
  }

  onSubmit():void{
    this.userService.updateUser({...this.user,id:this.editingIndex}).subscribe(() => {
      this.router.navigate(['/employee-list']);
    });
  }
}
