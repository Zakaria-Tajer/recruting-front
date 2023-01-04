import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/service/auth.service';
import { loginInfos } from './rc-login-Interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'rc-login',
  templateUrl: './rc-login.component.html',
  styleUrls: ['./rc-login.component.css']
})
export class RcLoginComponent implements OnInit{
  facebookIcon = faFacebookF;
  googleIcon = faGoogle;

  body = new URLSearchParams();
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    })
  };
 
  constructor(private http: HttpClient, private service : AuthService){
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

    let loginInfo: any = {email: email, password: password};

    if(email == '' || password == '') {
      this.form.setErrors({error:true, message: 'The email or password is invalid'})
    }else {

      console.log('h');
      this.body.set('email', loginInfo.email);
      this.body.set('password', loginInfo.password);
  
      
      this.http.post("http://localhost:8011/login",this.body.toString(), this.options).subscribe(response => {
        console.log(response);
        
      });
    }    
  }
    // this.router.navigate(['/rcDashboard'])

  
}
