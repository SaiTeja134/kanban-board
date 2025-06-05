import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User = {
    username:'',
    password:'',
    role:'',
    fullName:'',
    position:'',
    department:'',
    phoneNumber:''
  }
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.userService.register(this.user).subscribe({
      complete: () => {
        alert('Register successful!!')
        this.router.navigate(['/login']);
      },
      error: (error) => alert(error.message)
    });
  }
}
