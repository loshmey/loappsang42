import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {SharedService} from './shared.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';

@NgModule({
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,

    // bootstrap
    AlertModule.forRoot(),

    // toastr
    ToastrModule.forRoot(),

    // router
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers: [
    SharedService
  ],
  exports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule,
    ToastrModule,
    RouterModule
  ]
})
export class SharedModule { }
