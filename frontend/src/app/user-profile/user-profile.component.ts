import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user:User={};
  userId:number = 0; 
  constructor(private router:Router, private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['id'];
    this.loadUserProfile();
  }

  loadUserProfile():void{
    this.userService.getUserById(this.userId).subscribe((v) => {
      this.user = v;
    })
  }

  logout():void{
    this.router.navigate(['/logout']);
  }
}
