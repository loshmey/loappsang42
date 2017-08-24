import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EventsService} from './events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate{

  constructor(
    private eventService: EventsService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id: number = route.params['id'];
    const eventExists: boolean = !!this.eventService.getEvent(id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }

}
