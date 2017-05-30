import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Example1 } from '../example1/example1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoCard(cardNumber){
    this.navCtrl.push(Example1);
  }
}
