import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  customerId:any;
  account:any;

  constructor(private accountService:AccountService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
   this.customerId=this.activatedRoute.snapshot.params[('customerId')];
   console.log(this.customerId);
   this.accountService.getAccountById(this.customerId).subscribe(
    (response)=>{
      this.account=response;
      console.log(this.account);
    },
    (error)=>{
      console.log("Error during getting account details for updation")
    }
   );

  }

  updateAccount()
  {
    this.accountService.updateAccount(this.account,this.customerId).subscribe(
      (response)=>{
        
        if(response.length==0)
        {
          alert("Account Details Updated");
          this.router.navigate(['/home/getAllAccounts']);
        }
        else
        {
          alert("Account Details not Updated");
        }
        
      },
      (error)=>{
        alert("Error in Updating the Account Details");
        console.log(error);
      }
    )
    }
}


