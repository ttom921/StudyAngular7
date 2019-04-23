import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// 表示videojs的程式庫的宣告
declare let videojs: any;

@Component({
  selector: 'app-op2',
  templateUrl: './op2.component.html',
  styleUrls: ['./op2.component.scss']
})
export class Op2Component implements  AfterViewInit {
  // Instancia do video.js.
  vidObj: any;
  // videoURL: string = "https://www.sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4";
  // videoURL: string = "http://clappr.io/highline.mp4";
  videoURL: string ="http://vjs.zencdn.net/v/oceans.mp4";
  // 存取html上的標籤
  @ViewChild('myvid') vid: ElementRef;
  
  // 當html顯示
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
