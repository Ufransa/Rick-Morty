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
            icon: 'pi pi-home',
            routerLink: ['home']
          },
          {
            label: 'Character',
            icon: 'pi pi-prime',
            routerLink: ['character']
          },
          {
            label: 'Locations',
            icon: 'pi pi-globe',
            routerLink: ['location']
          },
          {
            label: 'Episodes',
            icon: 'pi pi-file',
            routerLink: ['episodes']
          },
        ]
    }

}
