import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Testngxdnd';
  orderableList= [
    "ditem 1",
    "ditem 2",
    "ditem3 "
  ]
  dropped(event){
    console.log(event);
  }
}
