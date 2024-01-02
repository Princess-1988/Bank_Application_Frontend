import { Component } from '@angular/core';
import { TransactionService } from 'src/app/Service/Transaction/transaction.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  constructor(private transactionService:TransactionService){}
  formData = {
    fromAccount: '',
    toAccount:'',
    fundType:'',
    fundAmount:''    
  };
  fundType:any;
  depositAmount(data:any)
  {
     
    this.formData.fundType="Deposit";
    this.transactionService.depositAccount(data.fromAccount,data.toAccount,this.fundType,data.fundAmount).subscribe(
      (response)=>{
        if(response!=null)
        {
          alert("New Transaction-Deposited successfully");
        }
        else{
          alert("Amount is not deposited");
        }
        
      },
      (error)=>  {
        console.log(error);
        alert("Error in depositting");
      }   
    )
  }
}
