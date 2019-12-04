import {Component, OnInit, Output} from '@angular/core';
import {VedioService} from '../service/vedio.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search: string;
  constructor(private service: VedioService) { }

  ngOnInit() {
  }

  send(search) {
    this.service.changeMessage(search.value);
    console.log(this.search);
  }

}
