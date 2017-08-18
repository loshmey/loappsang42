import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(
    private eventService: EventsService
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}
