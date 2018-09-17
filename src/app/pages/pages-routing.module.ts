import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {AuthGuardService} from '../shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canActivate: [AuthGuardService]
      },
      {
        path: 'shortcode',
        loadChildren: './shortcode/shortcode.module#ShortcodeModule',
        canActivate: [AuthGuardService]
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
