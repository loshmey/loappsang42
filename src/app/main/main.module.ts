import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {MainComponent} from './main.component';
import {EventsModule} from './events/events.module';
import {NavbarModule} from './navbar/navbar.module';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    EventsModule,
    NavbarModule
  ],
  declarations: [
    MainComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MainComponent, NavbarComponent]
})
export class MainModule { }
