import { Routes } from '@angular/router';
import { BookAvailableComponent } from './book-available/book-available.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { PayFineComponent } from './pay-fine/pay-fine.component';

export const routes: Routes = [
  {
    path: 'book-available',
    component: BookAvailableComponent,
    data: { title: 'Book Available' }
  },
  {
    path: 'issue-book',
    component: IssueBookComponent,
    data: { title: 'Issue Book' }
  },
  {
    path: 'return-book',
    component: ReturnBookComponent,
    data: { title: 'Return Book' }
  },
  {
    path: 'pay-fine',
    component: PayFineComponent,
    data: { title: 'Pay Fine' }
  }
];
