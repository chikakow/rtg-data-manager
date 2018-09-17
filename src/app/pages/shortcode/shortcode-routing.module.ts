import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShortcodeComponent} from './shortcode.component';

const routes: Routes = [
  {
    path: '',
    component: ShortcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortcodeRoutingModule { }
