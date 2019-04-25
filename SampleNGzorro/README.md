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



