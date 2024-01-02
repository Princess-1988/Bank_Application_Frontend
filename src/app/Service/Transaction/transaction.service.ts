import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl="http://localhost:8080";
  constructor(private http:HttpClient){}

  depositAccount(fromAccount:any,toAccount:any,fundType:any,fundAmount:any):Observable<any>
  {    
   
    fundType="Deposit";
    let params = new HttpParams()
    params=params.append("transaction_amount",fundAmount);
    params=params.append("transaction_type",fundType)
    params=params.append("from_account",fromAccount)
    params=params.append  ("to_account",toAccount);
   
    console.log(params);
    return this.http.post<any>(this.baseUrl+'/api/v1/transaction'+'/addNewTransaction',params)
  }

  withdrawAccount(fromAccount:any,fundType:any,fundAmount:any):Observable<any>
  {    
   
   
    let params = new HttpParams()
    params=params.append("transaction_amount",fundAmount);
    params=params.append("transaction_type",fundType)
    params=params.append("from_account",fromAccount);
    
   
       return this.http.post<any>(this.baseUrl+'/api/v1/transaction'+'/addNewTransactionDepositWithdrawal',params)
  }

  getAllTransactions():Observable<any>
  {
    return this.http.get(this.baseUrl+'/api/v1/transaction'+'/getAllTransactions');
  }

  getTransactionsByCustomerId(customerId:any):Observable<any>
  {
    console.log(customerId);
    return this.http.get(this.baseUrl+'/api/v1/transaction'+'/transactionById/'+customerId);
  }

  
  getTransactionsByTransactionAmount(balance:any):Observable<any>
  {
    
    return this.http.get(this.baseUrl+'/api/v1/transaction'+'/getTransactionByTransactionAmount/'+balance);
  }

}
