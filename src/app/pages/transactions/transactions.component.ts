import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookAvailableComponent } from './book-available/book-available.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,BookAvailableComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

}
