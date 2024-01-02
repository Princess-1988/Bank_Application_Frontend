import { Component } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
 
  constructor(private accountService:AccountService){}

  validatedAddNewAccount(data:any)
  {
 
    console.log(data);
    this.accountService.addNewAccount(data  ).subscribe(
     
      (response)=>{
        console.log(response);
        if(response==null)
        {
          alert ("New account is not created")
        }
        else{
          alert("New account successfully added");
        }
        
      },
      (error)=>{
        if(error.status!=200)
        {
          alert("New account is not created")
        }
      },
      ()=>{
        console.log("New Account request completed");
        alert("Add New account request completed");
      }
    );  
  }
}
