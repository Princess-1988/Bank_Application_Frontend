import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  formInput:any;
 balance:any;
 formData = {
  customerId: ''
  
};
Id:any;
submitted:boolean=false;
  constructor(private accountService:AccountService, private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.submitted=false;
  }
 
  
  checkBalance(data:any)
  {
     
    this.Id=this.formData.customerId;
    this.accountService.checkBalanceById(data.Id).subscribe(
      (response)=>{
        if(response!=null)
        {
          this.balance=response;
          this.submitted=true;
        }
        
       
      },
      (error)=>{
       if(error.status!=200)
       { alert("Customer Id does not exist");}
       
      }
    )
  }

  reload()
  {
    this.submitted=false; 
  }

}
