import { Component, OnInit } from '@angular/core';
import { TransactionApiService } from '../../services/transactions/transaction-api.service';
import { Transaction } from '../../models/transaction';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '400ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class TransactionsComponent implements OnInit {

  private _transactions: Transaction[];
  get transactions(): Transaction[] {
    return this._transactions;
  }
  set transactions(value: Transaction[]) {
    this._transactions = value;
    this.loading = false;
  }
  filteredTransactions: Transaction[];
  private _searchString: string;
  get searchString(): string {
    return this._searchString;
  }
  set searchString(value: string) {
    this._searchString = value;
    this.filteredTransactions = this.filterTransactions(value);
  }
  selectedTransaction: Transaction;
  public showTransactions: Boolean = true;
  public showDetails: Boolean = true;
  public MobileView: Boolean = false;
  title = 'Transactions';
  loading = false;

  constructor(
    private transactionsService: TransactionApiService,
    public breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {

      this.getTransactions();

      this.breakpointObserver
      .observe(['(min-width: 1000px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Desktop View'
          );
          this.showTransactions = true;
          this.showDetails = true;
          this.MobileView = false;
          this.title = 'Transactions';
        }  else {
          console.log(
            'Mobile and Tablet View'
          );
          this.showDetails = false;
          this.showTransactions = true;
          this.MobileView = true;
        }
      });
  }

  filterTransactions(searchterm: string) {
    return this.transactions.filter(transaction => transaction.Text.toLocaleLowerCase()
    .indexOf(searchterm.toLocaleLowerCase()) !== -1);
  }

  getTransactions(): void {
    this.loading = true;
    this.transactionsService.getTransactions()
    .subscribe(transactions => this.transactions = this.filteredTransactions = transactions);
  }

  setTransaction(selectedTransaction: Transaction) {
    this.selectedTransaction = selectedTransaction;
    if (this.MobileView) {
      this.showTransactions = false;
      this.showDetails = true;
      this.title = 'Transaction details';
    }
  }

  goToTransactions(): void {
    this.showTransactions = true;
    this.showDetails = false;
    this.title = 'Transactions';
  }
}
