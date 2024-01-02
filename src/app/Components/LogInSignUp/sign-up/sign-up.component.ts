import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/Authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authenticationService:AuthenticationService, private router: Router){}
 
  onSignInClick(data:any)
  {
    console.log(data);
    this.authenticationService.signUp(data).subscribe(
     
      (response)=>{
        console.log(response);
        if(response==null)
        {
          alert ("Not registered")
        }
        else{
          alert("Registered Successfully");
          this.router.navigate(['./home']);
        }
        
      },
      (error)=>{
        if(error.status!=200)
        {
          alert("Not registered--error")
        }
      },
      ()=>{
        console.log("New Account request completed");
      }
    ); 
    
    
  }
}
