import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup = new FormGroup({
    fname:new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    phonenumber:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),
    cpass:new FormControl(null,[Validators.required]),
    address:new FormControl(null,[Validators.required])
  })
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
  }

  register()
  {
    if(!this.registerFormGroup.valid || (this.registerFormGroup.controls['password'].value != this.registerFormGroup.controls['cpass'].value))
    {
      console.log('Invalid form')
      return;
    }
    this._userService.register(JSON.stringify(this.registerFormGroup.value)).
    subscribe(
      data => {console.log(data), this._router.navigate(['/login']);},
      error => console.log(error)
      
    )
    // console.log(JSON.stringify(this.registerFormGroup.value))
  }

  moveToLogin()
  {
    this._router.navigate(['/login'])
  }


}