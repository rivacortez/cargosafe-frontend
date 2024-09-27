import {Component, input, output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'home',
      icon: 'fal fa-home',
      label: 'home',
    },
    {
      routeLink: 'ordersOnTrip',
      icon: 'fal fa-box-open',
      label: 'Products',
    },
    {
      routeLink: 'drivers/management',
      icon: 'fal fa-file',
      label: 'drivers',
    },
    {
      routeLink: 'Vehicles',
      icon: 'fal fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}


