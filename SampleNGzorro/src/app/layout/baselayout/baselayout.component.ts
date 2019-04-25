import { Component } from '@angular/core';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css']
})
export class BaselayoutComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
}
