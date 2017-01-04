import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule } from "@angular/router";


const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
