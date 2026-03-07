import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, RouterModule, MatExpansionModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss',
})
export class LeftSidebar {
  readonly panelOpenState = signal(false);

  changeIsLeftSidebarCollapsed = output<boolean>();
  isLeftSidebarCollapsed = input.required<boolean>();
  items = [
    {
      routeLink: '',
      icon: 'fal fa-home',
      category: 'Dashboard',
      pages: []
    },
    {
      routeLink: '',
      icon: 'fal fa-solid fa-car',
      category: 'Cars',
      pages: []
    },
    {
      routeLink: 'users',
      icon: 'fal fa-solid fa-user',
      category: 'Users',
      pages: [
        {
          link: "makes",
          name: "Makes"
        },
        {
          link: "models",
          name: "Models"
        },
      ]
    },
    {
      routeLink: 'brands',
      icon: 'fal fa-solid fa-conveyor-belt',
      category: 'Brands',
      pages: [
        {
          link: "view-makes",
          name: "View Makes"
        },
        {
          link: "view-models",
          name: "View Models"
        },
        {
          link: "create-make",
          name: "Create Make"
        },
        {
          link: "create-model",
          name: "Create Model"
        },
      ]
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      category: 'Settings',
      pages: [
        {
          link: "makes",
          name: "Makes"
        },
        {
          link: "models",
          name: "Models"
        }
      ]
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed())
  }

  closeSidenav() {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
