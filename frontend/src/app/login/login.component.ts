import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string = '';
  errorMessage:string='';
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    this.userService.verifyLogin(this.username,this.password).subscribe({
      next: () => {
        this.router.navigate(['/kanban']);
        
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      }
    })
  }
  goToRegister():void{
    this.router.navigate(['/register']);
  }
}
