import { Route } from '@angular/router';
import { PollContainerComponent } from '../poll-container/poll-container.component';
import { TformComponent } from '../tform/tform.component';
import { RformComponent } from '../rform/rform.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: PollContainerComponent
  },
  {
    path: 'tform',
    component: TformComponent
  },
  {
    path: 'rform',
    component: RformComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
