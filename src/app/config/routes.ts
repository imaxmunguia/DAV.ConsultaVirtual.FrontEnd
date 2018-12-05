import { RouterModule, Routes } from '@angular/router';

import { PensumsEditComponent } from '../components/pensums/pensums-edit/pensums-edit.component';
import { PensumsCreateComponent } from '../components/pensums/pensums-create/pensums-create.component';
import { PensumsIndexComponent } from '../components/pensums/pensums-index/pensums-index.component';
import { LoginComponent } from '../components/login/login.component';

export const  routes: Routes = [
  {
    path: 'create',
    component: PensumsCreateComponent
  },
  {
    path: 'edit/:id',
    component: PensumsEditComponent
  },
  {
    path: 'index',
    component: PensumsIndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];