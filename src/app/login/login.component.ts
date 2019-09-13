import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'dist/AccountsProject/images/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [ Validators.required, Validators.minLength(4)]),
  }, { updateOn: 'blur' });
  public error: string;

  constructor(private router: Router, private service: AppService) {
  }

  ngOnInit() {
  }
    
  submit() {
    if (this.form.valid && this.isValidCredentials()) {
      this.router.navigate(['home']);
    } else {
      this.error = 'User name or password incorrect';
    }
  }

  isValidCredentials(): boolean {
    //TODO: Need to call auth service to check the credentials using database
    const isValidated = this.username.value === this.password.value;
    localStorage.setItem('authenticated', isValidated.toString());

    return isValidated;
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
}
