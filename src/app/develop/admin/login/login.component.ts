import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginType } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginObj :LoginType = {
    username: '',
    password: ''
  }

  constructor(private router:Router){}

  onLogin(){
    if(this.loginObj.username == 'milad' && this.loginObj.password == '123'){
      alert('login success');
      this.router.navigateByUrl('/dashboard')
    }else{
      alert('wrong username or password');
    }
  }

}
