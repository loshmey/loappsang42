import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsComponent} from './events.component';
import {SharedModule} from '../../shared.module';
import {EventsListComponent} from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import {EventsService} from './events.service';
import {EventDetailsComponent} from './event-details/event-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EventsComponent, EventsListComponent, EventThumbnailComponent, EventDetailsComponent],
  providers: [EventsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [EventsComponent]
})
export class EventsModule { }
