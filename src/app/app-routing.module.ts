import { NgModule } from '@angular/core';
import { AddAccountComponent } from './Components/Account/add-account/add-account.component';
import { ViewAllAccountsComponent } from './Components/Account/view-all-accounts/view-all-accounts.component';
import { ViewAccountByIdComponent } from './Components/Account/view-account-by-id/view-account-by-id.component';
import { UpdateAccountComponent } from './Components/Account/update-account/update-account.component';
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
import { AppHomeComponent } from './Components/Home/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Service/AuthGuard/auth.guard';

const routes: Routes = [

  {path:'',component:LoginComponent} ,
  {path:'home/createNewAccount',component:AddAccountComponent},
  {path:'home/getAllAccounts',component:ViewAllAccountsComponent},
  {path:'home/getAccountById/:customerId',component:ViewAccountByIdComponent},
  {path:'home/updateAccountById/:customerId',component:UpdateAccountComponent},
  {path:'home/checkBalanceById',component:CheckBalanceComponent},
  {path:'home/getAccountDetailsByAccountNumber',component:ViewAccountByAccountNumberComponent},
  {path:'home/getAccountDetailsByBalance',component:ViewAccountByBalanceComponent},
  {path:'home/depositNewTransaction',component:DepositComponent},
  {path:'home/withdrawNewTransaction',component:WithdrawalComponent},
  {path:'home/getAllTransactions',component:ViewTransactionsComponent},
  {path:'home/getTransactionByCustomerId',component:SearchTransactionByCustomerIdComponent},
  {path:'home/getTransactionByFundTransaction',component:SearchTransactionByAmountComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'home',component:AppHomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
