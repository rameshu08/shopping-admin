import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public registerForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

    this.registerForm = this._fb.group({
      userName:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

  onSubmit(){
    this.loginService.addUser(this.registerForm.value).subscribe((res) => {
      if(res){
        this.router.navigateByUrl('/dashboard');
      }
    })
  }
}
