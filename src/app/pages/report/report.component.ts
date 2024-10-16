import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  constructor(private router: Router) {}

  // Logout method
  logout(): void {
    sessionStorage.setItem('loginInfo', '');
    this.router.navigate(['/login']);
  }

  masterListOfBooks = [
    { title: 'Book 1' },
    { title: 'Book 2' },
    { title: 'Book 3' },
  ];

  masterListOfMovies = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
  ];

  masterListOfMemberships = [
    { name: 'Member 1' },
    { name: 'Member 2' },
    { name: 'Member 3' },
  ];

  activeIssues = [
    { bookTitle: 'Active Issue Book 1' },
    { bookTitle: 'Active Issue Book 2' },
  ];

  overdueReturns = [
    { bookTitle: 'Overdue Book 1' },
    { bookTitle: 'Overdue Book 2' },
  ];

  pendingIssueRequests = [
    { bookTitle: 'Pending Request Book 1' },
    { bookTitle: 'Pending Request Book 2' },
  ];

}
