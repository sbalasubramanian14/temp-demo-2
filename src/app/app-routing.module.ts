import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'home-page', component: HomePageComponent},
      { path: 'info-page', component: InfoPageComponent}
    ]
},
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transaction-details', component: TransactionDetailsComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'info-page', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
