import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component';

@Injectable()
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  /**
   * Method which gards against route changes.
   *
   * @param {CreateEventComponent} component
   * @returns {boolean} true if can navigate away from page, false otherwise
   */
  canDeactivate(component: CreateEventComponent): boolean {
    if (component.isDirty) {
      return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
  }

  constructor() { }

}
