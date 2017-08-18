import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared.module';
import {MainModule} from './main/main.module';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    SharedModule,
    MainModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
