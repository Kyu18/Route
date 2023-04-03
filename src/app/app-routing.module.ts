import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApprovalComponent } from './approval/approval.component';
import { HeadnavComponent } from './headnav/headnav.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { SummaryComponent } from './summary/summary.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    component:DashboardComponent, path: 'dashboard'
  },
  {
    component:ApprovalComponent, path: 'approval'
  },
  {
    component:SettingsComponent, path: 'settings'
  },
  {
    component:UsersComponent, path: 'users'
  },
  {
    component:SummaryComponent, path: 'summary'
  },
  {
    component:DashboardComponent, path: 'dashboard'
  },
  {
    component:LoginComponent, path: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
