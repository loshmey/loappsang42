import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;

  constructor(
    private eventService: EventsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
  }

}
