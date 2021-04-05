import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss'],
})
export class EditTransactionComponent implements OnChanges {
  @Input() id = null;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.id);
  }
}
