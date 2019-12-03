import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output ()search: string;
  //@Input() sideBar: SideBarComponent;

 // @HostListener('click')
  click() {
   // this.sideBar.toggle();
  }


  constructor() { }

  ngOnInit() {
  }

}
