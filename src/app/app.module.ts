import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    TransactionDetailsComponent,
    NavBarComponent,
    HomePageComponent,
    InfoPageComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCz7CM7VkzHL2MDRCA6g_H6DPWy5mX0Pl0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
