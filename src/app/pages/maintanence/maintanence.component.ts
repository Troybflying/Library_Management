import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AddMembershipComponent } from './add-membership/add-membership.component';

@Component({
  selector: 'app-maintanence',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,RouterLink,AddMembershipComponent],
  templateUrl: './maintanence.component.html',
  styleUrls: ['./maintanence.component.scss'],
})
export class MaintanenceComponent {
  // Define the type for the dropdown keys
  dropdownState: { membership: boolean; booksMovies: boolean; userManagement: boolean } = {
    membership: false,
    booksMovies: false,
    userManagement: false,
  };

  constructor(private router: Router) {}

  // Method to navigate to the homepage
  navigateToHomepage(): void {
    this.router.navigate(['admin/homepage']);
  }

  // Method to toggle dropdowns with stricter type checking
  toggleDropdown(section: 'membership' | 'booksMovies' | 'userManagement'): void {
    this.dropdownState[section] = !this.dropdownState[section];
  }
}
