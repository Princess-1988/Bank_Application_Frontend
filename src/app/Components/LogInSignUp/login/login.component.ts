import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/Authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
whichRole:any;
  constructor(private authenticationService:AuthenticationService, private router: Router){}
  

login(data:any)
{
  console.log(data);
  this.authenticationService.login(data).subscribe(
   
    (response)=>{
      
      if(response==null)
      {
        alert ("Not logged in")
      }
      else{
       
        for(let role of response.authorities)
        {
          //console.log(role.authority);
          
          this.whichRole=  sessionStorage.setItem('currentUser',role.authority);
          
        }
        alert("Logged in Successfully");
        this.router.navigate(['./home']);
      }
      console.log(this.whichRole);
    },
    (error)=>{
      if(error.status!=200)
      {
        alert("Not logged in--error")
      }
    },
    ()=>{
      console.log("New Account request completed");
    }
  ); 
}
}
