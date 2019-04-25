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

### 加入drag&drop測試

使用Angular Material來測試， 先安裝

```
npm install @angular/cdk
npm install --save @types/node
```

修改`src\tsconfig.app.json`加入node

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": ["node"]
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts"
  ]
}
```



是使用API來完成Drag&Drop的功能，所以要加入*DragDropModule*到**MiscellaneousModule**

```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';
imports: [
    
    DragDropModule,
   
  ]
```
產生測試元件
```
ng g c miscellaneous\misceDragDrop
```

在雜項裏加入此測試元件

產生track和tack的物件，用來追蹤移動的情況

```
ng g interface share/track
```

在`src\app\share\track.ts`加入物件

```typescript
export interface Track {
    id: string;
    title: string;
}
export interface Task {
    id: string;
    title: string;
    description: string;
}

```

在加入資料檔在`src\app\share\data.json`

```json
[
    {
        "title": "ToDo",
        "id": "todo",
        "task": [
            {
                "id": "task-001",
                "title": "First Task",
                "description": "This is my first task"
            }
        ]
    },
    {
        "id": "In Progress",
        "title": "Inprogress",
        "task": [
            {
                "id": "task-002",
                "title": "Second Task",
                "description": "this my Second task"
            }
        ]
    },
    {
        "title": "D-Done",
        "id": "ddone",
        "tasks": [
            {
                "id": "task-003",
                "title": "Third Task",
                "description": "This is my Third task"
            }
        ]
    },
    {
        "title": "QA Pass",
        "id": "qapass",
        "tasks": [
            {
                "id": "task-004",
                "title": "Four Task",
                "description": "This is my Four task"
            }
        ]
    }
]
```

注意長度有設定不然會Drag&Drop會有問題

