import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    MenubarModule,
    AutoCompleteModule,
    InputTextModule,
  ],
  exports: [
    MenubarModule,
    AutoCompleteModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SharedModule { }
