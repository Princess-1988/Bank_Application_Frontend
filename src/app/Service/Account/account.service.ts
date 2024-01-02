import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl="http://localhost:8080";
 
  constructor(private http:HttpClient) { }

  addNewAccount(obj:any):Observable<any>
  {
    console.log(obj);
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    console.log(body);
    return this.http.post(this.baseUrl+'/api/v1/account'+'/addNewAccount',body,{'headers':headers});
  }

  getAllAccounts():Observable<any>
  {
    return this.http.get(this.baseUrl+'/api/v1/account'+'/getAllAccounts');
  }

    getAccountById(customerId:any):Observable<any>
    {
        return this.http.get(this.baseUrl+'/api/v1/account'+'/getAccountById/'+customerId);
    }

  updateAccount(obj:any,customerId:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.patch(this.baseUrl+'/api/v1/account'+'/updateAccount/'+customerId,body,{'headers':headers});
  }

  deleteAccountById(customerId:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+'/api/v1/account'+'/deleteAccount/'+customerId);
  }

  checkBalanceById(customerId:any):Observable<any>
  {
    console.log(customerId);
    return this.http.get(this.baseUrl+'/api/v1/account'+'/checkBalance/'+customerId)
  }
   
  getAccountByAccountNumber(dataActNum:any):Observable<any>
  {
    let queryParams = new HttpParams();
    queryParams=queryParams.append("accountNumber",dataActNum);
    console.log(queryParams);
    return this.http.get(this.baseUrl+'/api/v1/account'+'/getAccountDetailsByAccountNumber',{params:queryParams})
  }

  getAccountByBalance(balance:any):Observable<any>
  {
    return this.http.get(this.baseUrl+'/api/v1/account'+'/getAccountByBalance/'+balance)
  }

}
