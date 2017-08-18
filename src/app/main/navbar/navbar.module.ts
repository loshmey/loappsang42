import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [NavbarComponent]
})
export class NavbarModule { }
