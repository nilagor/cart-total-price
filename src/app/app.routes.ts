import { Routes } from '@angular/router';

import { FuncComponent } from './func/func.component';
import { HomeComponent } from './home/home.component';
import { OopComponent } from './oop/oop.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'func', component: FuncComponent },
  { path: 'oop', component: OopComponent }
];

