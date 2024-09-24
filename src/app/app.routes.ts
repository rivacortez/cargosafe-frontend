import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DriverManagementComponent} from "./drivers/pages/driver-management/driver-management.component";

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: HomeComponent },
  { path: 'pages', component: PageNotFoundComponent },
  {path:'drivers/management', component:DriverManagementComponent}
];
