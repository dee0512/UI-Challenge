import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Example1 } from './example1';

@NgModule({
  declarations: [
    Example1,
  ],
  imports: [
    IonicPageModule.forChild(Example1),
  ],
  exports: [
    Example1
  ]
})
export class Example1Module {}
