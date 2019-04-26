### TestAgm
測試有關googleMap的**angular-google-maps（AGM）**的套件使用
首先安裝程式庫

```
npm install @agm/core --save
```

將加入AGM(**AgmCoreModule**)模組到`src\app\app.module.ts`中

若為測試其實可留白（移除 YOUR_KEY，改為空字串），只是容易受 Request 次數限制使用。

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'',// 測試可留空白
      language:'zh-TW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

- languarg:在此填入zh-TW
- apiKey: google map api key

### 擴展元件 agm-map

在`src\app\app.component.ts`中加入

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first AGM project';
  lat: number = 24.1504536;
  lng: number = 120.68325279999999;
  zoomValue: number = 15;
}

```

- lat:緯度(number數字型別)
- lng:經度(number數字型別)
- zoomValue:視圖倍率
- 備註:設定上習慣會先設定緯度再來是經度

在`src\app\app.component.html`中加入`amg-map`的標籤，並提供預設定位點`[latitude]`，`[longitude]`

> 如果沒有設定預設定位點，會被定位在海上

```html
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">
</agm-map>
```

此時沒有畫面顯示是因為沒有設定高度

在`src\app\app.component.scss`中設定

```scss
agm-map {
    height: 80vh;
}
```

### 標記元件-Marker

利用agm-marker，就可以指定地點標記

```html
<h3>{{title}}</h3>
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">
  <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="iconUrl" ></agm-marker>
</agm-map>

```

- agm-marker :是可以標記
- iconUrl:標記點的圖片，若無設定，則預設(為我們平常看到的)

### 彈跳資訊視窗

如果想要設計一個點選marker時，會彈出訊息小窗，可以利用InfoWindow，此功能原google map api就有

我們建立一個markerClickEvent並且新增一個InfoWindow在`src\app\app.component.html`

```html
<h3>{{title}}</h3>
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">
  <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="iconUrl" (markerClick)="markerClick($event)" >
      <agm-info-window [latitude]="lat+0.0005">
          <h5>這是測試點</h5>
          <p>就在公司的附近</p>
        </agm-info-window>
  </agm-marker>
</agm-map>
```
- agm-info-window :是資訊視窗
- latitude:在屬緎上==故意==利用lat+0.0005, 因為我們希望訊息顯示在點位偏上，否則會導致不清楚。
- isOpen:是否顯示
- markerClick():事件名稱可自訂，當click事件觸發時的function

在`src\app\app.component.ts`中
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first AGM project';
  lat: number = 24.9322837;////24.1504536;
  lng: number = 121.2682761;////120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = '';//'http://i.imgur.com/0TctIfY.png';
  //24.9322837,
  //121.2682761,
  //15.82
  isOpen: boolean = false;
  markerClick(e): void {
    this.isOpen=true;
  }
}
```

### 元件-Circle

如果我們想稅用google map api中的Circle方法，繪製出一個區域的圓形，使用agm-circle即可繪製。

加入agm-circle標籤，給予經緯度並指定半徑即可在`src\app\app.component.html`

```html
<h3>{{title}}</h3>
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">
  <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="iconUrl" (markerClick)="markerClick($event)" >
      <agm-info-window [latitude]="lat+0.0005">
          <h5>這是測試點</h5>
          <p>就在公司的附近</p>
        </agm-info-window>
  </agm-marker>
  <agm-circle [latitude]="lat" [longitude]="lng" [radius]="radius" [fillColor]="fillColor" ></agm-circle>
</agm-map>
```

- agm-circle : 畫圓半徑

- radius: 圓徑半徑(公尺)

- fillColor：𡍼滿顏色(預設黑色)，該屬性自動包含透明

  ​                顏色可用:HTML - ＃ C23CAC RGBA-rgba(194,60,172,1)

在`src\app\app.component.ts`加入屬性

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first AGM project';
  lat: number = 24.9322837;////24.1504536;
  lng: number = 121.2682761;////120.68325279999999;
  zoomValue: number = 15;
  iconUrl: string = '';//'http://i.imgur.com/0TctIfY.png';
  isOpen: boolean = false;
  radius:number = 500;
  fillColor:string = 'rgba(194,60,172,1)';
  markerClick(e): void {
    this.isOpen=true;
  }
}
```

### 元件-DataLayer

如果我們想要介接圖資，可利用 agm-data-layer，讀取圖資。
為了測試使用，我們可以利用 OpenData 中的 [直轄市、縣市界線(TWD97經緯度)](http://data.gov.tw/node/7442)，
由於提供的檔案是 Shp（[shapefile](https://zh.wikipedia.org/zh-tw/Shapefile)），我們要轉成 JSON 格式才可讀取。
關於轉換的方法可參考此篇 - [mapshaper - Shp to topojson](https://dotblogs.com.tw/explooosion/2017/06/04/020426)。

首先我們先建立一個 Service，程式碼才不會雜亂，而該服務會讀取JSON，並回傳解析後程式：

```
ng g s service/layer
```

為了使用 Http 以及 Json 模組，我們必須先注入相關 Provider，在上方 import Http 以及 Json 模組，並且加入於下方 imports。在`src\app\app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'',
      language:'zh-TW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

完成後開始撰寫 layerService，一開始我們先引入HttpClientModule 模組，提供我們解析資料。`src\app\service\layer.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayerService {
  public url: string = 'assets/county.json'
  constructor(private http: HttpClient) { }
  public getGeoJsonLayer(){
    return this.http.get(this.url);
  }
}

```

在`src\app\app.component.ts`

```typescript
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
  radius:number = 500;
  fillColor:string = 'rgba(194,60,172,1)';
  geoJson: Object = null;
  constructor(private layerService: LayerService){}
  ngOnInit(): void {
    this.layerService.getGeoJsonLayer()
      .subscribe(
      result => {
        console.log(result);
        this.geoJson = result;
      });
  }

  markerClick(e): void {
    this.isOpen=true;
  }
}
```

在`src\app\app.component.html`

```html
<h3>{{title}}</h3>
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoomValue">
  <agm-data-layer [geoJson]="geoJson"></agm-data-layer>
  <agm-marker [latitude]="lat" [longitude]="lng" [iconUrl]="iconUrl" (markerClick)="markerClick($event)">
    <agm-info-window [latitude]="lat+0.0005">
      <h5>這是測試點</h5>
      <p>就在公司的附近</p>
    </agm-info-window>
  </agm-marker>
  <agm-circle [latitude]="lat" [longitude]="lng" [radius]="radius" [fillColor]="fillColor"></agm-circle>
</agm-map>
```

