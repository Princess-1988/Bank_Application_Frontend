import { CanActivateFn } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  
 /* this.role = sessionStorage.getItem('currentUser');
  if(this.role=="ROLE_USER")
  {
   this.isuser=true;
   this.isadmin=false;
   
  }
  else if(this.role=="ROLE_ADMIN")
  {
    this.isadmin=true;
    this.isuser=true;
  }*/

  return true;
};
