import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Service/Transaction/transaction.service';

@Component({
  selector: 'app-search-transaction-by-amount',
  templateUrl: './search-transaction-by-amount.component.html',
  styleUrls: ['./search-transaction-by-amount.component.css']
})
export class SearchTransactionByAmountComponent {
  formData = {
    balance: ''
  };
  noCustomer:any;
  transactions:any[]=[];
  fetching:boolean = false;
  constructor(private transactionService:TransactionService,private activatedRoute:ActivatedRoute){}
  

  getTransactionDetailsByFundAmount(data:any)
  {
    
    
    this.transactionService.getTransactionsByTransactionAmount(data.amt).subscribe(
      (response)=>{
        if(response.length!=0)
        {
          this.transactions=response;
          this.fetching=true;        
            this.noCustomer=true;
        }
        else
        {
          this.fetching=false;        
          this.noCustomer=false;
          alert("No transactions are made greater than the given amount")
        }
      
      
        
      },
      (error)=>{
        
        alert("Get account by Id request failed")
      },
      
    );

  }

  reload()
  {
    this.fetching=false;        
          this.noCustomer=false;
  }
}
