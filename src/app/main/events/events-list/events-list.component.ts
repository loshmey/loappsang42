import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Array<any>;

  constructor(
    private eventService: EventsService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(id: number) {

  }
}
