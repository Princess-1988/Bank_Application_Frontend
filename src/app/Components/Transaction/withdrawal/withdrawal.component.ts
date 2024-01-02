import { Component } from '@angular/core';
import { TransactionService } from 'src/app/Service/Transaction/transaction.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent {
  constructor(private transactionService:TransactionService){}
  fundType:any
  withdrawAmount(data:any)
  {
    this.fundType="Withdrawal";
    this.transactionService.withdrawAccount(data.fromAccount,this.fundType,data.fundAmount).subscribe(
      (response)=>{
        if(response!=null)
        {
          alert("New Transaction-withrawn successfully");
        }
        
      },
      (error)=>  {
        if(error.status!=200)
        {
          alert("Error in withdrawing");
        }
        
      }   
    )
  }
}
