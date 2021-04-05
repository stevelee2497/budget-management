import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTransactionComponent } from '../edit-transaction/edit-transaction.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [
    {
      id: 1,
      amount: 200,
      type: TransactionType.Incoming,
      description: 'Salary',
    },
    {
      id: 2,
      amount: 2100,
      type: TransactionType.Spending,
      description: 'Buy TV',
    },
    {
      id: 3,
      amount: 3200,
      type: TransactionType.Spending,
      description: 'Buy food',
    },
  ];
  constructor(private _modalService: NgbModal) {}

  open(id: number) {
    const modalRef = this._modalService.open(EditTransactionComponent, {
      size: 'lg',
      centered: true,
    });
    modalRef.componentInstance.id = id;
  }

  ngOnInit(): void {}
}

export enum TransactionType {
  Spending = 'Spending',
  Incoming = 'Incoming',
}

class Transaction {}
