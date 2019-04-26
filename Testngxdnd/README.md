# Testngxdnd

###  安裝

```
npm i @swimlane/ngx-dnd @swimlane/dragula @types/dragula  @angular/cdk --save
```

在`angular.json`中加入`"./node_modules/@swimlane/ngx-dnd/release/index.css"`

```json
"styles": [
              "src/styles.scss",
              "./node_modules/@swimlane/ngx-dnd/release/index.css",
              "./node_modules/@swimlane/ngx-dnd/release/components/container/container.component.css",
              "./node_modules/@swimlane/ngx-dnd/release/components/item/item.component.css"
            ],
```

在`src\polyfills.ts`下加入

```javascript
if (typeof window['global'] === 'undefined') {
  window['global'] = window;
}
```

將`NgxDnDModule`加入到**AppModule**的模組裏

```typescript
import { NgxDnDModule } from '@swimlane/ngx-dnd';
//...
 imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDnDModule
  ],
 
```

在`src\styles.scss`加入風格

```scss
@import '~@swimlane/ngx-dnd/release/index.css';
```

打印結果在html要使用

```html
<code><pre>orderableList = {{orderableList | json}}</pre></code>
```

