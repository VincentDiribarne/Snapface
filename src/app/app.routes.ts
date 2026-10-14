import {Routes} from '@angular/router';
import {SnapsHome} from './features/snaps/pages/snaps-home/snaps-home';

export const routes: Routes = [
  {
    path: '',
    component: SnapsHome
  },
  {
    path: 'messages',
    component: SnapsHome
  },
  {
    path: 'search',
    component: SnapsHome
  }
];
