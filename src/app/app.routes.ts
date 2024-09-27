import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DriverManagementComponent} from "./drivers/pages/driver-management/driver-management.component";
import {OrderOnTripCardComponent} from "./orders-on-trip/order-on-trip-card/order-on-trip-card.component";
import {
  OrdersOnTripManagementComponent
} from "./orders-on-trip/pages/orders-on-trip-management/orders-on-trip-management.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pages', component: PageNotFoundComponent },
  {path:'drivers/management', component:DriverManagementComponent},
  { path: 'orders', component: OrdersOnTripManagementComponent },
  {path: 'ordersOnTrip',component:OrdersOnTripManagementComponent}
];
