import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {SharedService} from '../../../shared.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Array<any>;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(id: number) {

  }
}
