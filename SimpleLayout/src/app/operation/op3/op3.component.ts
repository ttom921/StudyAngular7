import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as videojs from 'video.js';
// 表示videojs的程式庫的宣告
//declare let videojs: any;
@Component({
  selector: 'app-op3',
  templateUrl: './op3.component.html',
  styleUrls: ['./op3.component.scss']
})
export class Op3Component implements OnInit,AfterViewInit {
 
  // Instancia do video.js.
  //vidObj: any;
  // videoURL: string = "https://www.sample-videos.com/video123/mp4/480/big_buck_bunny_480p_30mb.mp4";
  //videoURL: string = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
  //videoURL: string = "http://vjs.zencdn.net/v/oceans.mp4";
  // 存取html上的標籤
  @ViewChild('video') videoElement: ElementRef;
  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;

  video: any;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log(this.tref.nativeElement);
    // console.log(this.videoElement.nativeElement);   
    //  const options = {
    //    controls: true,
    //    autoplay: false//,
    //    //preload: 'auto',
    //    //techOrder: ['html5']
    //  };
    //  this.video = videojs(this.videoElement.nativeElement,options);
    // this.video.src([
    //   {
    //     type: "application/dash+xml",
    //     src: "https://manifest.mpd",

    //   }
    // ]);
    // this.video.play();
    
  }
}
