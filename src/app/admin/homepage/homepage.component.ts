import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private router: Router) {}

  logOut(): void {
    // Clear session storage
    sessionStorage.setItem('loginInfo', '');

    // Redirect to the login page
    this.router.navigateByUrl('pages/login'); // Adjust the path to your actual login route
  }

}
