import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShortcodeRoutingModule} from './shortcode-routing.module';
import {ShortcodeComponent} from './shortcode.component';
import {StatModule, TodoModule} from '../../shared-component/modules';

@NgModule({
  imports: [
    CommonModule,
    StatModule,
    TodoModule,
    ShortcodeRoutingModule
  ],
  declarations: [
    ShortcodeComponent
  ]
})
export class ShortcodeModule { }
