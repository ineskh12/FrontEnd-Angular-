import {Component, OnInit, Output} from '@angular/core';
import {VedioService} from '../service/vedio.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search: string;
  historyObj = { youtube: [] };
  constructor(private service: VedioService) { }

  ngOnInit() {
    if (localStorage.getItem('youtube') !== null) {
      this.historyObj = JSON.parse(localStorage.getItem('youtube'));
    }
  }

  send(search) {
    this.service.changeMessage(search.value);
    console.log(this.search);
  }

  addHistory(dataToSave) {
    this.historyObj.youtube.push(dataToSave.value);
    localStorage.setItem('youtube', JSON.stringify(this.historyObj));
    console.log(this.historyObj);
  }

}
