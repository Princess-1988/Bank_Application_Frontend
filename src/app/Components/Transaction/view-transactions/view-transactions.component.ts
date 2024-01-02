import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/Service/Transaction/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  transactions:any[]=[];
  constructor(private transactionService:TransactionService){}

  ngOnInit(): void {
    this.transactionService.getAllTransactions().subscribe(
      (response)=>{
        this.transactions=response;
        console.log(response);
      },
      (errror)=>{
          console.log("Get all transactions request failed");
      },
      ()=>{
        console.log("Get all transactions request completed");
        alert("Get all transactions request completed");
      }

    )
  }

}
