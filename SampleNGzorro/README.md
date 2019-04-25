### 建立新專案

```
ng new SampleNGzorro
cd SampleNGzorro
ng add ng-zorro-antd
```

選擇加入icon,不設定custom theme,選擇`zh_TW`

建立基本layout

```
ng g ng-zorro-antd:layout-side layout\baselayout
```

#### 建立miscellaneous模組

```
ng g m miscellaneous --routing
ng g c miscellaneous\miscellaneous --flat
```

在`src\app\miscellaneous\miscellaneous.component.html`的檔案加入'router-outlet'標籤不然不會顯示

```html
<p>
  miscellaneous works!
</p>
<router-outlet></router-outlet>
```

在miscellaneous模組建立兩個組件

```
ng g c miscellaneous\miscepage1
ng g c miscellaneous\miscepage2
```

記得**AppModule**要加入**MiscellaneousModule**

在`src\app\miscellaneous\miscellaneous-routing.module.ts`的路申模組要修改如下

```typescript
const routes: Routes = [
  {
    path: 'misce', component: MiscellaneousComponent, children: [
      { path: 'miscepage1', component: Miscepage1Component },
      { path: 'miscepage2', component: Miscepage2Component }
    ]
  }
];
```

在按鈕或連結在使用上要加入父和子的路徑`routerLink="./misce/miscepage1"`

在`src\app\app-routing.module.ts`的路由模組要修改如下

```typescript
const routes: Routes = [
  {path:'',redirectTo:'misce',pathMatch:'full'},
  {path:'misce',component:MiscellaneousComponent}
];
```

#### 建立page404元件

```
ng g c page404
```

在src\app\app-routing.module.ts的路由加入

```typescript
const routes: Routes = [
  {path:'',redirectTo:'misce',pathMatch:'full'},
  {path:'misce',component:MiscellaneousComponent},
  {path:'404',component:Page404Component}
];
```

####　建立Home模組

```
ng g m home --routing
ng g c home\home --flat
```

在`src\app\home\home.component.html`的檔案加入`router-outlet`標籤不然不會顯示

```html
<p>
  home works!
</p>
<router-outlet></router-outlet>
```



在建立三個元件

```
ng g c home\page1
ng g c home\page2
ng g c home\page3
```

在`src\app\app.module.ts`要將**HomeModule**模組加入

在`src\app\home\home-routing.module.ts`的路由要修改如下

```typescript
const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component }
    ]
  }
];
```

當沒有顯示Icon時，可以重新下載

```
npm install ng-zorro-antd --save
```



