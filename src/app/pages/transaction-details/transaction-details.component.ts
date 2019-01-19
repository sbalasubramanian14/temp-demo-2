import { Component, OnInit, OnChanges , SimpleChanges, SimpleChange , Input } from '@angular/core';
import { TransactionApiService } from '../../services/transactions/transaction-api.service';
import { Transaction } from '../../models/transaction';
import { TransactionDetails } from '../../models/transaction-details';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit, OnChanges {

  @Input() selectedTransaction: Transaction;

  private _details: TransactionDetails[];
  get details(): TransactionDetails[] {
    return this._details;
  }
  set details(value: TransactionDetails[]) {
    this._details = value;
    this.loading = false;
  }
  convertedString: string;
  loading = false;
  constructor(private transactionsService: TransactionApiService) {  }


  ngOnInit() {
    this.selectedTransaction = new Transaction();
    this.selectedTransaction.Text = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( this.selectedTransaction ) {
      this.convertedString = this.selectedTransaction.Text.replace(/\s+/g, '+');
      console.log(this.convertedString);
      this.getTransactionDetails(this.selectedTransaction.Text);
    }
  }
  getTransactionDetails(text: string): void {
    this.loading = true;
    this.transactionsService.getTransactionDetails(text)
    .subscribe(details => this.details = details);
  }

}
