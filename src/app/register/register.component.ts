
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
// import passwordMatch class:
// import mustContainSymbol class:
import { passwordMatch, mustContainSymbol} from './registerValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private builder: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name: ["", {validators: Validators.required}],
      email: ["", {validators: [Validators.required, Validators.email]}],
      username: ["", {validators: Validators.required}],
      password: ["",
                {validators: [Validators.required,Validators.minLength(6),mustContainSymbol,],},],
    confirmPassword: "",              
    },{validators: passwordMatch});
  }

  // subscribe register method:
  register(){
    this.authService.register(this.registerForm.value)
    .subscribe(() => {
      this.router.navigate(['/login'])
    }, () => {})
  }
}
