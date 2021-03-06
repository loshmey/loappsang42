import {EventsListComponent} from './app/main/events/events-list/events-list.component';
import {EventDetailsComponent} from './app/main/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {MainComponent} from './app/main/main.component';
import {CreateEventComponent} from './app/main/events/create-event/create-event.component';
import {Error404Component} from './app/main/errors/error404.component';
import {EventRouteActivatorService} from './app/main/events/event-route-activator.service';
import {EventRouteDeactivatorService} from './app/main/events/event-route-deactivator.service';
import {EventsListResolverService} from './app/main/events/events-list/events-list-resolver.service';

// putanje u aplikaciji
export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '404',
        component: Error404Component
      },
      {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: [ EventRouteDeactivatorService ]
      },
      {
        path: 'events',
        component: EventsListComponent,
        resolve: {
          events: EventsListResolverService
        }
      },
      {
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [ EventRouteActivatorService ]
      },
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full',
      }
    ]
  }
];
