import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-view-all-accounts',
  templateUrl: './view-all-accounts.component.html',
  styleUrls: ['./view-all-accounts.component.css']
})
export class ViewAllAccountsComponent implements OnInit{
  
  accounts:any[]=[];
  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(
      (response)=>{
        this.accounts=response;
        console.log(response);
      },
      (errror)=>{
          console.log("Get all accounts request failed");
      },
      ()=>{
        console.log("Get all accounts request completed");
        alert("Get all accounts request completed");
      }

    )
  }

  deleteAccountById(customerId:any)
  {
    this.accountService.deleteAccountById(customerId).subscribe(
      (response)=>{
        alert("Account deleted!");
        this.ngOnInit();
        },
        (error)=>{
          alert("Error occured on deleting Account");
        }

    );
  }

}
