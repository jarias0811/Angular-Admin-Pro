import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {APP_ROUTES} from './app.route';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NoPageFoundComponent} from './shared/no-page-found/no-page-found.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {HeaderComponent} from './shared/header/header.component';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumsComponent} from './shared/breadcrums/breadcrums.component';
import {PagesComponent} from './pages/pages.component';
import {RegisterComponent} from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
