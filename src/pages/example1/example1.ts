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
  selector: 'page-example1',
  templateUrl: 'example1.html',
})
export class Example1 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  password='';username='';
  boldString="Awkward";
  lighterString="Donuts";
  totalLength = this.lighterString.length + this.boldString.length;
  characterIndexes = [];
  ionViewDidLoad() {
    $(document).ready(function(){$("input").attr("autocomplete","off");});
    this.pushCharacters();
    this.setCharacterWidth();
    this.animate();
  }

  pushCharacters(){
    for (let i=0; i < this.totalLength; i++) {
      this.characterIndexes.push(i);
    }
    for (let i=0; i < this.lighterString.length; i++) {
      $('#animate .lighter').append('<span class="char'+i+' char">'+this.lighterString.charAt(i)+'</span>');
      $('#calculate .lighter').append('<span class="char'+i+' char show">'+this.lighterString.charAt(i)+'</span>');
    }
    for (let i=0; i < this.boldString.length; i++) {
      $('#animate .bold').append('<span class="char'+i+' char">'+this.boldString.charAt(i)+'</span>');
      $('#calculate .bold').append('<span class="char'+i+' char show">'+this.boldString.charAt(i)+'</span>');
    }
  }

  setCharacterWidth(){
    for (let i=0; i < this.lighterString.length; i++) {
      let width = $('#calculate .lighter .char' + i).width();
      $('#animate .lighter .char' + i).width(width);
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
      if(charNum >= this.lighterString.length){
        charNum = charNum - this.lighterString.length;
        $('#animate .bold .char' + charNum).addClass('show');
      }else{
        $('#animate .lighter .char' + charNum).addClass('show');
      }
      if(this.characterIndexes.length){
        this.animate();
      }
    }, 50);
  }

  textChanged = function(){
    let button = $('#button');
    if(this.password.length >= 8 && this.username.length){
      if(!button.hasClass('show')){
        button.addClass('show');
      }
    }else{
      if(button.hasClass('show')){
        button.removeClass('show');
      }
    }
  }
}
