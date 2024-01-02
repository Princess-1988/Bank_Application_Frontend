import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Service/Transaction/transaction.service';

@Component({
  selector: 'app-search-transaction-by-customer-id',
  templateUrl: './search-transaction-by-customer-id.component.html',
  styleUrls: ['./search-transaction-by-customer-id.component.css']
})
export class SearchTransactionByCustomerIdComponent  {
  formData = {
    customerId: ''
  };
  noCustomer:any;
  transactions:any[]=[];
  fetching:boolean =false;
  constructor(private transactionService:TransactionService,private activatedRoute:ActivatedRoute){}
  

  getTransactionDetailsByCustomerId(data:any)
  {
    
    
    this.transactionService.getTransactionsByCustomerId(data.Id).subscribe(
      (response)=>{
      if(response.length!=0)
      {
        this.transactions=response;
       
        this.fetching=true;
        this.noCustomer=true;
        console.log(this.transactions);
      }
      else
      {
        this.fetching=false;
        this.noCustomer=false;
      }
       
      },
      (error)=>{
        alert("Get account by Id request failed")
      },
      ()=>{
        alert("Get account by Id request completed")
      }
    );

  }
  reload()
  {
    this.fetching=false;
        this.noCustomer=false;
  }

}
