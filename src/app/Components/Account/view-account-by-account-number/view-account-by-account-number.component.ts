import { Component } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-view-account-by-account-number',
  templateUrl: './view-account-by-account-number.component.html',
  styleUrls: ['./view-account-by-account-number.component.css']
})
export class ViewAccountByAccountNumberComponent {
  formData = {
    accountNumber: ''
  };
  errorMsg:boolean=false;
  fetching:boolean = false;
  account:any;
accountNumberData: any;
  constructor(private accountService:AccountService){}
  getAccountDetailsByAccountNumber(data:any)
  {
    console.log(data)
    this.accountService.getAccountByAccountNumber(data.accountNum).subscribe(
      (response)=>{
        console.log(response);
       if(response==null)
       {
        alert("Account Number does not exist")
        this.fetching=false;
        this.errorMsg=true;
       }
       else
       {
        this.account=response;
        this.fetching=true;
        this.errorMsg=false;
       }
      },
      (error)=>{
        alert("Error in Fetching Account Details By Account Number")
      }
    )
  }
}
