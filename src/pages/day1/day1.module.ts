import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Day1 } from './day1';

@NgModule({
  declarations: [
    Day1,
  ],
  imports: [
    IonicPageModule.forChild(Day1),
  ],
  exports: [
    Day1
  ]
})
export class Day1Module {}
