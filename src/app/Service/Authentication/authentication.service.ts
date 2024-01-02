import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  role:any;
  isuser:any;
  isadmin:any;

  baseUrl="http://localhost:8080";
  constructor(private http:HttpClient, private route:Router) { }

  signUp(obj:any):Observable<any>
  {
    console.log(obj);
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    console.log(body);
    return this.http.post(this.baseUrl+'/api/auth'+'/signup',body,{'headers':headers});
  }

  
  login(obj:any):Observable<any>
  {
    console.log(obj);
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    console.log(body);
    return this.http.post(this.baseUrl+'/api/auth'+'/signin',body,{'headers':headers});
  }

}