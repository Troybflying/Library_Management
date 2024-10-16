import { Routes } from '@angular/router';
import { AddMembershipComponent } from './add-membership/add-membership.component';


export const routes: Routes = [
  {
    path: 'add-membership',
    component: AddMembershipComponent,
    data: { title: 'Add-Membership' }
  },
 
];
