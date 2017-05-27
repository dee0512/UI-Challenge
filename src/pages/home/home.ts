import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Day1 } from '../day1/day1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoCard(cardNumber){
    this.navCtrl.push(Day1);
  }
}
