import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/interfaces/LoginResponse';
import { AgentLoginService } from 'src/app/service/agent/agent-login.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent {
constructor(private router: Router, private service: AgentLoginService){
  }




  form = new FormGroup({
    email: new FormControl(
      '', [Validators.email, Validators.required]
    ),
    password: new FormControl(
      '', [Validators.minLength(6),Validators.required]
    ),
  })


  ngOnInit() {

    const emailError = this.form.get('email');
    const passwordError = this.form.get('password');

    emailError?.valueChanges.subscribe(x => {
      this.validateEmailControl();
    })

    passwordError?.valueChanges.subscribe(x => {
      this.validatePasswordControl();
    })


  }


  private validateEmailControl(): void {
    if (this.form.controls.email.hasError('email') || this.form.controls.email.hasError('required')) {
      this.form.controls.email.setErrors({incorrect: true, message: 'Please enter a valid email'})
    }

  }

  private validatePasswordControl(): void {
    if (this.form.controls.password.hasError('minlength') || this.form.controls.password.hasError('required')) {
      this.form.controls.password.setErrors({incorrect: true, message: 'Please enter 6 characters at least'})
    }

  }

  onSubmit(): void {
    let { email, password } = this.form.value;

    let loginInfo = {email: email, password: password};

    if(email == "" || password == "") {
      this.form.setErrors({error:true, message: 'The email or password is invalid'})
    }else {

      this.service.login(loginInfo).subscribe((authData: LoginResponse) => {

        console.log(authData);
        
          if(authData.message === "unauthenticated" || authData.token === null || authData.message === "wrong password" ) {
            this.form.setErrors({ authenticated: false, message: 'inccorect email or password' });
          }else {
          
            localStorage.setItem('token', authData.token);


            console.log(authData);
            
            this.router.navigate(['/agentDashboard']);
          }

      });
    }
  }
}
