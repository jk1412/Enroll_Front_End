import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required])
  })
  constructor(private _router:Router, private _user:UserService) { }

  ngOnInit(): void {
  }

  moveToRegister()
  {
    this._router.navigate(['/register'])
  }
  Login()
  {
   if(!this.loginFormGroup.valid)
   {
   console.log('Invalid Form') 
   }
  //  console.log(JSON.stringify(this.loginFormGroup.value))
   this._user.login(JSON.stringify(this.loginFormGroup.value)).subscribe(
   data => {console.log(data), this._router.navigate(['/home'])},
   error=> console.log(error)
   
  )}

}
