import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SummaryComponent,
    HomeComponent,
    AddTransactionComponent,
    TransactionComponent,
    TransactionListComponent,
    EditTransactionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
