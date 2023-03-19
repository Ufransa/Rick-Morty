import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = []

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Home',
            icon: 'home-button-icon',
            routerLink: ['home']
          },
          {
            label: 'Character',
            icon: 'characters-button-icon',
            routerLink: ['character']
          },
          {
            label: 'Locations',
            icon: 'locations-button-icon',
            routerLink: ['location']
          },
          {
            label: 'Episodes',
            icon: 'episodes-button-icon',
            routerLink: ['episodes']
          },
        ]
    }

}
