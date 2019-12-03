import {Component, OnInit, EventEmitter, Output} from '@angular/core';


import {VedioService} from '../service/vedio.service';

@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.css']
})
export class VedioComponent implements OnInit {
  public idparam ;
  public id  ;
  public search ;


  constructor(private myservice: VedioService) {
    this.id = '';
    this.idparam = '';
    console.log(this.id);
    console.log(this.idparam);
  }


  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;
  ngOnInit() {

    console.log('ines');
    console.log(this.id);
    console.log(this.search);
    // this.show(this.search);

  }

  public show(event, Search) {
      console.log(event.click);
      this.idparam = Search.value.substring(32, Search.value.length);
      const  str4 = '\'' + this.idparam + '\'';
      this.id += this.idparam ;
      console.log(this.idparam);
  }

  onStateChange(event) {
    this.ytEvent = event.data;
    console.log(event.data);
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
