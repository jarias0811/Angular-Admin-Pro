import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumsComponent} from './breadcrums/breadcrums.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NoPageFoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NoPageFoundComponent
  ]
})
export class SharedModule {
}
