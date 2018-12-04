import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PensumsEditComponent } from './components/pensums/pensums-edit/pensums-edit.component';
import { PensumsCreateComponent } from './components/pensums/pensums-create/pensums-create.component';
import { PensumsIndexComponent } from './components/pensums/pensums-index/pensums-index.component';

import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { PensumsService } from './services/pensums.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PensumsEditComponent,
    PensumsCreateComponent,
    PensumsIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PensumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }