import { Component, OnInit } from '@angular/core';
import { Track, Task } from 'src/app/share/track';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-misce-drag-drop',
  templateUrl: './misce-drag-drop.component.html',
  styleUrls: ['./misce-drag-drop.component.scss']
})
export class MisceDragDropComponent implements OnInit {
  author: string = 'ttom'
  tracks: Track[] = require('src/app/share/data.json');
  constructor() { }

  ngOnInit() {
  }
    /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Task[]>) {
    console.log('onTalkDrop->'+event);

    // In case the destination container is different from the previous container, we
    // need to transfer the given task to the target data array. This happens if
    // a task has been dropped on a different track.
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
