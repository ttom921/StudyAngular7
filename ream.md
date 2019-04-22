### SimpleLayout

先建立簡單的layout,來測式路由和組件的關系

#### 建立專案

```
ng new SimpleLayout
```

選擇有路由和SCSS

產生3個頁面

```
ng g c page1
ng g c page2
pg g c page3
```

#### 加入路由

在`app-routing.module.ts`的檔案中加入3個由規則分別對應到Page1Component,Page2Component,Page3Component

- path: 設定導覽的相對路徑
- component: 設定要載入的Component

```typescript
const routes: Routes = [
  {path:'',children:[]},
  {path:'p1',component:Page1Component},
  {path:'p2',component:Page2Component},
  {path:'p3',component:Page3Component}
];
```

當導覽路徑變化時，Angular Router會將導覽路徑拿來跟路由規則逐一比對，如果路徑與`path`條件符合就會執行該路由條件，因為目前我們設定了`compent`屬性，所符合條件就會將`component`屬性所指定的Component插入目前Componet的`router-outlet`tag內

#### 萬用路由(**)

Angular Router提供一個萬用路由規則，當`path`屬性設定為`**`時表示條修為任意值，路由比對到這一個規則時一定會符合，所以設置在此規則後面的路由規則基本上是無效的，因為任何導覽路徑到了萬用路由就會被攔載到，所以正常會將**萬用路由放置在路由規則的最後面**

#### 練習加入萬用路由

嘗式加入一固萬用路由，並改用`redirectTo`屬性，將其設定為`p1`

- redirectTo: 表示當路由規則符合時會重新導覽到**reditectTo**所指定的路由路徑

```typescript
  const routes: Routes = [
    {path:'',children:[]},
    {path:'p1',component:Page1Component},
    {path:'p2',component:Page2Component},
    {path:'p3',component:Page3Component},
    {path:'**',redirectTo:''}
  ];
```

一般而言萬用路由不應該被執行到，因為這表示目前導覽路行是非預期的路籼，所以萬用路由會比較像是為了避免系統出錯的預防機制，比較常則的情境是

- 導覽到首頁：此種情境適合在發生錯誤時使用者可以括棄目前資訊，大部分來說這種非預期狀況是一般使用者無法排除的，因此導引至首面可以讓使用者繼續操作， 在PWA(Progressive Web App)網路應該是不錯的選擇

- Page Not Fount：目前網路比較普遍的作法，是建立一個HTTP 404頁面，對於此較需要立即𤗤正的網站會比較適合，除了可以藉由404頁面蒐集當時狀態讓後續可以分析了解原因，這種中斷式頁面也較容易讓使用者立即反應回饋䌞維護人員。

#### 練習製作HTTP 404頁面

 透過指令`ng g c page404`建立對修改page404.html

```html
<p>
  404 Page Not Found
</p>
```

修改`app-routing.module.ts`將萬用路由指向Page404Component

```typescript
const routes: Routes = [
  {path:'',children:[]},
  {path:'p1',component:Page1Component},
  {path:'p2',component:Page2Component},
  {path:'p3',component:Page3Component},
  //{path:'**',redirectTo:''}
  {path:'**',component:Page404Component}
];
```

### 導航(Navigation)

我們透過改變導覽路徑來切換內容，但是一般使用者不會透過修改網址來切換功能，正常情況下應該透過點選操作來𠝽換內容

#### RouterLink

Angulr 提供一個很便利的功能RouterLink，讓我們不需要撰寫程式碼可以直接在樣板內直接設定連結對象

#### 練習加入RouterLink

修改`app.compoenet.html`分別入超連結`a`, 按鈕`button`標籤`span`，並分別設定`routerLink`屬性對應到路由規則的`p1`,`p2`,`p3`。

> routerLink屬性加入`/`來表示相對路徑

 ```html
<a routerLink="/p1" >Page1</a>
<button routerLink="/p2" >Page2</button>
<span routerLink="/p3" >Page3</span>
<hr/>
<router-outlet></router-outlet>
 ```

### 模組(NgModule)

過去我們將所有實作的元件(Compenent)都塞到**AppModule**內，但是實務上的專案可能會有幾十個甚至上百個元件，如果全部都放置在**AppModule**內，會造成專案𩁤以維護也𩁤以分工的問題，所有比較合理的做法就是將元件分拆到不同的模組(NgModule),再將模組聚合起來。

開啟`src\app\app.module.ts`可以看到目前所建立的元件

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

我們可以把**模組**假想成**資料夾**，把**元件**想成是**檔案**

#### 建立新模組

透過Angular-CLI指令`ng g m [name]`來建立新模組, 例如建立一個**OperationModule**，透過`ng g m operation`

> `g`為`generate`縮寫，`m`為`module`縮寫

CLI產生一個位於src\app\operation\operation.module.ts的模組

如果某個元件要使用到這個模組就必須將它註冊到該元件所屬的模組內，這樣才能使用。

我們在**OperationModule**模組位罝`(src\app\operation\)`下面再建立3個元件**Op1Component**,**Op2Component**,**Op3Component**。

```
ng g c operation\op1
ng g c operation\op2
ng g c operation\op3
```

![2019-04-22_16_08_26](/pic/2019-04-22_16_08_26_Image.jpg)

神奇的事情發生了，元件都註冊到**OperationModule**,而不是**AppModule**, 也就是說CLI在建立元綿時會時元件註冊到最近的模組內。

![2019-04-22_16_12_48](/pic/2019-04-22_16_12_48_Image.jpg)

打開`src\app\operation\operation.module.ts`可以看到3個元件確實都被註冊到**OperationModule**

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Op1Component } from './op1/op1.component';
import { Op2Component } from './op2/op2.component';
import { Op3Component } from './op3/op3.component';

@NgModule({
  declarations: [Op1Component, Op2Component, Op3Component],
  imports: [
    CommonModule
  ]
})
export class OperationModule { }
```

但是別忘了**OperationModule**目前還是居無定所，沒有被註冊到任何模組內。

