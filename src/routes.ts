import {EventsListComponent} from './app/main/events/events-list/events-list.component';
import {EventDetailsComponent} from './app/main/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {MainComponent} from './app/main/main.component';

// putanje u aplikaciji
export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full',
      },
      {
        path: 'events',
        component: EventsListComponent
      },
      {
        path: 'events/:id',
        component: EventDetailsComponent
      }
    ]
  }
];
