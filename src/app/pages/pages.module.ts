import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {PagesRoutingModule} from './pages-routing.module';
import {SidebarComponent, TopnavComponent} from '../shared-component/components';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    PagesRoutingModule
  ],
  declarations: [
    TopnavComponent,
    SidebarComponent,
    PagesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
