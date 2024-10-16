import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BookAvailableComponent } from './pages/transactions/book-available/book-available.component';
import { IssueBookComponent } from './pages/transactions/issue-book/issue-book.component';
import { ReturnBookComponent } from './pages/transactions/return-book/return-book.component';
import { PayFineComponent } from './pages/transactions/pay-fine/pay-fine.component';
import { MaintanenceComponent } from './pages/maintanence/maintanence.component';
import { AddMembershipComponent } from './pages/maintanence/add-membership/add-membership.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
    
    {path:'',component:LoginComponent, pathMatch:'full'},
    {path:'pages/login',component:LoginComponent, pathMatch:'full'},

    {path:'admin/homepage', component:HomepageComponent, pathMatch:'full'},
    {path:'user/homepage', component:HomepageComponent, pathMatch:'full'},
    {path:'pages/report', component:ReportComponent, pathMatch:'full'},

    { 
        path: 'pages/transactions', 
        component: TransactionsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/transactions/routes').then((m) => m.routes)
              },
        ]
      },
      {
        path: 'pages/maintanence',
        component: MaintanenceComponent,
        children: [
          {
            path: 'add-membership', // This matches the router link in the sidebar
            component: AddMembershipComponent,
            data: { title: 'Add Membership' }
          },
          // Other child routes can go here
        ]
      },
        

    

];
