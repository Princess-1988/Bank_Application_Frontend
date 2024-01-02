import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { UpdateAccountComponent } from './Components/Account/update-account/update-account.component';
import { AddAccountComponent } from './Components/Account/add-account/add-account.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewAllAccountsComponent } from './Components/Account/view-all-accounts/view-all-accounts.component';
import { ViewAccountByIdComponent } from './Components/Account/view-account-by-id/view-account-by-id.component';
import { CheckBalanceComponent } from './Components/Account/check-balance/check-balance.component';
import { ViewAccountByAccountNumberComponent } from './Components/Account/view-account-by-account-number/view-account-by-account-number.component';
import { ViewAccountByBalanceComponent } from './Components/Account/view-account-by-balance/view-account-by-balance.component';
import { LoginComponent } from './Components/LogInSignUp/login/login.component';
import { SignUpComponent } from './Components/LogInSignUp/sign-up/sign-up.component';
import { DepositComponent } from './Components/Transaction/deposit/deposit.component';
import { WithdrawalComponent } from './Components/Transaction/withdrawal/withdrawal.component';
import { ViewTransactionsComponent } from './Components/Transaction/view-transactions/view-transactions.component';
import { SearchTransactionByCustomerIdComponent } from './Components/Transaction/search-transaction-by-customer-id/search-transaction-by-customer-id.component';
import { SearchTransactionByAmountComponent } from './Components/Transaction/search-transaction-by-amount/search-transaction-by-amount.component';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './Common/app-header/app-header.component';

import { AppHomeComponent } from './Components/Home/app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddAccountComponent,    
    UpdateAccountComponent, 
    ViewAllAccountsComponent, 
    ViewAccountByIdComponent, 
    CheckBalanceComponent, 
    ViewAccountByAccountNumberComponent,
     ViewAccountByBalanceComponent,     
     LoginComponent,
     SignUpComponent,
     DepositComponent,
     WithdrawalComponent,
     ViewTransactionsComponent,
     SearchTransactionByCustomerIdComponent,
     SearchTransactionByAmountComponent,
     AppHeaderComponent,     
     AppHomeComponent    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
