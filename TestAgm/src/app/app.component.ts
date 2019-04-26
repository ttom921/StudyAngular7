import { Component, OnInit } from '@angular/core';
import { LayerService } from './service/layer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {

  title = 'My first AGM project';
  lat: number = 24.9322837;////24.1504536;
  lng: number = 121.2682761;////120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = '';//'http://i.imgur.com/0TctIfY.png';
  //24.9322837,
  //121.2682761,
  //15.82
  isOpen: boolean = false;
  radius: number = 5;
  fillColor: string = 'rgba(194,60,172,1)';
  geoJson: Object = null;
  // carroutertable:[]=[
  //   {24.931071, 121.267613},

  // ];
  constructor(private layerService: LayerService) { }
  ngOnInit(): void {
    this.layerService.getGeoJsonLayer()
      .subscribe(
        result => {
          //console.log(result);
          this.geoJson = result;
        });
  }

  markerClick(e): void {
    this.isOpen = true;
  }
  addMarker(lat:any,lng:any){
    console.log(lat,lng)
    this.Carrouters.push({lat,lng});
  }
  //data
  Carrouters: carroute[]=[];
  // Carrouters: carroute[] = [
  //   {
  //     lat: 24.931071,
  //     lng: 121.267613
  //   },
  //   {
  //     lat: 24.933065,
  //     lng: 121.267742
  //   },
  //   {
  //     lat: 24.932666,
  //     lng: 121.271508
  //   }
  // ];
}

// just an interface for type safety.
interface carroute {
  lat: number;
  lng: number;
}
