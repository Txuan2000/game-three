import { AfterViewInit, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  items!: MenuItem[];
  constructor(
  ) {
    
  }
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        routerLink: '/game',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements ' to the class.
    eva.replace();
  }
}

export const eva = require('eva-icons');