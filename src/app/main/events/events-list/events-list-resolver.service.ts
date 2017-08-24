import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EventsService} from '../events.service';

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor(private service: EventsService) { }

  resolve(): Observable<any> {
    return this.service.getEvents().map(events => events);
  }

}
