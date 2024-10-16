import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule instead of NgModel

// Define the Book interface
interface Book {
  authorName: string;
  bookName: string;
  copies: number;
}

@Component({
  selector: 'app-issue-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-book.component.html',
  styleUrl: './issue-book.component.scss'
})
export class IssueBookComponent {
  
  DUMMY_BOOKS_DATA = [
    { authorName: 'J.K. Rowling', bookName: 'Harry Potter and the Philosopher\'s Stone', copies: 5 },
    { authorName: 'George Orwell', bookName: '1984', copies: 0 },
    { authorName: 'Harper Lee', bookName: 'To Kill a Mockingbird', copies: 2 },
    { authorName: 'J.R.R. Tolkien', bookName: 'The Hobbit', copies: 1 },
    { authorName: 'F. Scott Fitzgerald', bookName: 'The Great Gatsby', copies: 0 },
    { authorName: 'Jane Austen', bookName: 'Pride and Prejudice', copies: 4 }
  ];
  
  books: Book[] = this.DUMMY_BOOKS_DATA; // Define type for books
  filteredBooks: Book[] = []; // Define type for filteredBooks
  authorSearch: string = '';
  bookSearch: string = '';
  searchResults: Book[] = []; // Define type for searchResults

  ngOnInit(): void {
    this.filteredBooks = this.books; // Initialize filteredBooks
  }

  onSearch(): void {
    this.searchResults = this.filteredBooks.filter(book =>
      (this.authorSearch === '' || book.authorName.toLowerCase().includes(this.authorSearch.toLowerCase())) &&
      (this.bookSearch === '' || book.bookName.toLowerCase().includes(this.bookSearch.toLowerCase()))
    );
  }

  onCancel(): void {
    this.searchResults = [];
    this.authorSearch = '';
    this.bookSearch = '';
  }

  checkAvailability(copies: number): string {
    return copies > 0 ? 'Yes' : 'No';
  }

}
