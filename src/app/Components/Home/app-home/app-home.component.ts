import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  role:any; 
  isadmin:any;
  isuser:any;
  constructor()
  {
    this.role = sessionStorage.getItem('currentUser');
    if(this.role=="ROLE_USER")
    {
     this.isuser=true;
     this.isadmin=false;
     
    }
    else if(this.role=="ROLE_ADMIN")
    {
      this.isadmin=true;
      this.isuser=true;
    }
   console.log(this.role);
  }
  ngOnInit(): void {
    
 }
  
  
   
  
 
}
