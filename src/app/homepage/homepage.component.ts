import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  firstname:String = ''
  strinaadhar: any
  constructor(private _user:UserService, private _router:Router) {
    
    
    this._user.home().subscribe(
      data => {console.log("Data of user iss....",data),this.displayfname(data)},
      error=> this._router.navigate(['/login'])
    )
  }
  displayfname(data: any)
  {
    this.firstname = data.fname
  }


  generateAadhar(length=16)
  {
   let num = '0123456789'
   let gs = new Array
   for(let i=0;i<length;i++)
   {
    let index = Math.floor(Math.random() * num.length )
    gs.push(num.charAt(index))
    console.log(gs)
    // this.aadharNumber.join('')
   }
   return gs
  }
  ngOnInit(): void {
  }

  logout()
  {
    this._user.logout().subscribe(
      data => {console.log(data);this._router.navigate(['/login'])},
      error=> console.log(error)
    )
  }

}
