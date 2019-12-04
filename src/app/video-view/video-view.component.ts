import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {VedioService} from '../service/vedio.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  @Input ()search: string;

  constructor(private hostElement: ElementRef, private service: VedioService) { }

  message: string;

  ngOnInit() {
    console.log(this.search);
    this.service.currentMessage.subscribe(message => {
      if (message !== undefined && message !== 'default') {
        console.log(message);
        this.message = message.replace('watch?v=', 'embed/') ;
        const iframe = this.hostElement.nativeElement.querySelector('iframe');
        iframe.src = this.message;
      }
    });
    // console.log(this.message);
  }

}
