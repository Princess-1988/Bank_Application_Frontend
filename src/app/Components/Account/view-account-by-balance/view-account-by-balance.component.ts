import { Component } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-view-account-by-balance',
  templateUrl: './view-account-by-balance.component.html',
  styleUrls: ['./view-account-by-balance.component.css']
})
export class ViewAccountByBalanceComponent {

  formData = {
    balance: ''
  };
  fetching:boolean = false;
  errorMsg:boolean=false;
  accounts:any[]=[];
  constructor(private accountService:AccountService){}

  getAccoutsByBalance(data:any)
  {
    this.accountService.getAccountByBalance(data.amount).subscribe(
      (response)=>{
         console.log(response.length)
        if(response.length==0)
       {
        this.fetching=false;
        this.errorMsg=true;
        alert("No User has balance less than the given input");
       }
       else
       {
        this.accounts=response;
        this.fetching=true;
        this.errorMsg=false;
       }
      },
      (error)=>{
        alert("Error in Fetching Account Details By Account Balance")
      }
    )

  }

 
}
