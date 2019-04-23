import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// Declara a lib do videojs como externa ao angular
declare let videojs: any;
@Component({
  selector: 'app-op1',
  templateUrl: './op1.component.html',
  styleUrls: ['./op1.component.scss']
})
export class Op1Component implements AfterViewInit {
  // Titulo do component
  title = 'Player com Video.JS';
  // Instancia do video.js.
  vidObj: any;
  // Poster para ser usado no video.js
  poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  // URL do video a ser reproduzido.
  video = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  // Acessa o elemento video do html5 via viewchild.
  @ViewChild('myvid') vid: ElementRef;
  
  ngAfterViewInit(): void {
    const options = {
      controls: true,
      autoplay: false,
      preload: 'auto',
      techOrder: ['html5']
    };
    this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
      videojs.log('Your player is ready!');
    });
  }

  

}
