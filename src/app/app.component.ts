import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private idparam = '';


  id = 'cfR7_EA1gTU';

  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  constructor() {}

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


  show(Search) {
    this.idparam = Search.value.substring(32, Search.value.length);
    console.log(this.idparam );
    console.log( Search.value.length );
    console.log('true' +  Search.value);
    console.log(this.id );
  }
}
