import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginForm : FormGroup;
  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){
    this.loginService.getUser(this.loginForm.value).subscribe((res) => {
      if(res){
        this.router.navigateByUrl('/dashboard');
      } else{
        console.log('error');
      }
    }), error =>{
      console.log(error.message);
    }
    // console.log(this.loginForm.value);
  }

}
