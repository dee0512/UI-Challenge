import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import * as _ from 'lodash';

/**
 * Generated class for the Day1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-day1',
  templateUrl: 'day1.html',
})
export class Day1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  regularString="White";
  boldString="Rabbit";
  totalLength = this.regularString.length + this.boldString.length;
  characterIndexes = [];
  ionViewDidLoad() {
    this.pushCharacters();
    this.setCharacterWidth();
    this.animate();
  }

  pushCharacters(){
    for (let i=0; i < this.totalLength; i++) {
      this.characterIndexes.push(i);
    }
    for (let i=0; i < this.regularString.length; i++) {
      $('#animate .regular').append('<span class="char'+i+' char">'+this.regularString.charAt(i)+'</span>');
      $('#calculate .regular').append('<span class="char'+i+' char show">'+this.regularString.charAt(i)+'</span>');
    }
    for (let i=0; i < this.boldString.length; i++) {
      $('#animate .bold').append('<span class="char'+i+' char">'+this.boldString.charAt(i)+'</span>');
      $('#calculate .bold').append('<span class="char'+i+' char show">'+this.boldString.charAt(i)+'</span>');
    }
  }

  setCharacterWidth(){
    for (let i=0; i < this.regularString.length; i++) {
      let width = $('#calculate .regular .char' + i).width();
      $('#animate .regular .char' + i).width(width);
    }
    for (let i=0; i < this.boldString.length; i++) {
      let width = $('#calculate .bold .char' + i).width();
      $('#animate .bold .char' + i).width(width);
    }
  }

  animate(){
    setTimeout(() => {
      let index = Math.floor(Math.random() * this.characterIndexes.length);
      let charNum = _.pullAt(this.characterIndexes, [index])[0];
      if(charNum >= this.regularString.length){
        charNum = charNum - this.regularString.length;
        $('#animate .bold .char' + charNum).addClass('show');
      }else{
        $('#animate .regular .char' + charNum).addClass('show');
      }
      if(this.characterIndexes.length){
        this.animate();
      }
    }, 50);
  }

}
