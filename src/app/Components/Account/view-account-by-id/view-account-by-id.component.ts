import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-view-account-by-id',
  templateUrl: './view-account-by-id.component.html',
  styleUrls: ['./view-account-by-id.component.css']
})
export class ViewAccountByIdComponent implements OnInit {
customerId:any;
account:any;

constructor(private accountService:AccountService,private activatedRoute:ActivatedRoute,private route:Router){}

  ngOnInit(): void {
    this.customerId=this.activatedRoute.snapshot.params[('customerId')];
    console.log(this.customerId);
    
    this.accountService.getAccountById(this.customerId).subscribe(
      (response)=>{
        this.account=response;
        console.log(this.account);
      },
      (error)=>{
        alert("Get account by Id request failed")
      },
      ()=>{
        alert("Get account by Id request completed")
      }
    );
    
    
  }

  viewPage()
  {
    this.route.navigate(['/home/getAllAccounts']);
  }

}
