import {Routes} from '@angular/router';
import {SnapsHome} from '@/features/snaps/pages/snaps-home/snaps-home';
import {ProfilePage} from '@/features/profil/pages/profile/profile-page';

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
  },
  {
    path: 'profile/:id',
    component: ProfilePage
  }
];
