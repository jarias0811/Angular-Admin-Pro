import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import {BreadcrumsComponent} from './breadcrums/breadcrums.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';
import {IncrementerComponent} from './incrementer/incrementer.component';
import { DonutGraphicComponent } from './donut-graphic/donut-graphic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NoPageFoundComponent,
    IncrementerComponent,
    DonutGraphicComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NoPageFoundComponent,
    IncrementerComponent,
    DonutGraphicComponent
  ]
})
export class SharedModule {
}
