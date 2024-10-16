import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-membership',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.scss'] // Fix 'styleUrl' to 'styleUrls'
})
export class AddMembershipComponent {
  firstName: string = '';
  lastName: string = '';
  contactNumber: string = '';
  contactAddress: string = '';
  aadhaarNumber: string = '';
  startDate: string = '';
  endDate: string = '';
  membershipDuration: string = ''; // This will be set from radio buttons

  // Method to handle form submission
  onConfirm(): void {
    if (this.isFormValid()) {
      alert('Membership added successfully!');
      this.resetForm(); // Optionally reset the form after successful submission
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Method to handle form cancellation
  onCancel(): void {
    this.resetForm();
  }

  // Form validation method
  isFormValid(): boolean {
    return this.firstName.trim() !== '' &&
           this.lastName.trim() !== '' &&
           this.contactNumber.trim() !== '' &&
           this.contactAddress.trim() !== '' &&
           this.aadhaarNumber.trim() !== '' &&
           this.startDate !== '' &&
           this.endDate !== '' &&
           this.membershipDuration !== ''; // Ensure it's checked
  }

  // Reset form fields
  resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.contactNumber = '';
    this.contactAddress = '';
    this.aadhaarNumber = '';
    this.startDate = '';
    this.endDate = '';
    this.membershipDuration = '';
  }
}
