import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {


  constructor(private hostElement: ElementRef) { }

  ngOnInit() {

  }

  link(youtube) {

    console.log("ines");
    const url = youtube.value.replace('watch?v=', 'embed/');
    console.log(youtube.value);
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = url;
  }

}
