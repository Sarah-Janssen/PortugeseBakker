// app.routes.ts

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PastelDetailsComponent} from './pastel-details/pastel-details.component';
import {LekkernijenComponent} from './lekkernijen/lekkernijen.component'

export const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  title: 'Home page',
},
  {
    path: 'lekkernijen',
    component: LekkernijenComponent,
    title: 'Onze lekkernijen',
  },
  {
    path: 'pastelDetails/:id',
    component: PastelDetailsComponent,
    title: 'Pastel details',
  },];

export default routes;
