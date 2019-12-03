import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {VedioService} from '../service/vedio.service';

@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.css']
})
export class VedioComponent implements OnInit {
  public idparam = '' ;


  private id= '6babsRG3WpQ' ;
  constructor(private myservice: VedioService) { }


  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;


  ngOnInit() {

    console.log('ines');


  }



show(Search)  {
    this.idparam = Search.value.substring(32, Search.value.length);
    const  str4 = '\'' + this.idparam + '\'';
    this.id =this.idparam ;

   // console.log(str4);
    console.log(this.idparam);
    return this.id;

  }



  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }



}
