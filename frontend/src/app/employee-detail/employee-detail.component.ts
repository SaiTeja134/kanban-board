import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-detail',
  standalone: false,
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {
  user:User={};
  userId:number; 
  constructor(private router:Router, private userService:UserService,private route:ActivatedRoute) {
    this.userId = +this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile():void{
    this.userService.getUserById(this.userId).subscribe((v) => {
      this.user = v;
    })
  }

  goback():void{
    this.router.navigate(['/employee-list']);
  }
}
