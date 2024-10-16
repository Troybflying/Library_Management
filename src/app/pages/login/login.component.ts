import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router){

  }

  loginType: string = 'user';
  userId: string = '';
  password: string = '';
  

  onLogin() {
    
    console.log(`Logging in as ${this.loginType}:`, this.userId);
    sessionStorage.setItem('loginInfo', this.loginType)
    console.log("this is info",sessionStorage.getItem('loginInfo'));
    if (sessionStorage.getItem('loginInfo')!=null&&sessionStorage.getItem('loginInfo')=='admin' && this.userId== 'abc' && this.password== '123')
    {
      alert("login Successfull")
      this.router.navigateByUrl('admin/homepage');
    }
    else if((sessionStorage.getItem('loginInfo')!=null&&sessionStorage.getItem('loginInfo')=='user' && this.userId== 'abc' && this.password== '123')){
      alert("login Successfull");
      this.router.navigateByUrl('user/homepage');
    }
    else{
      alert("Invalid")
    }
    
    
  }

  onCancel() {
    // Reset the fields
    this.userId = '';
    this.password = '';
    this.loginType = 'user';
  }

}
