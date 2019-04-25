import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisceDragDropComponent } from './misce-drag-drop.component';

describe('MisceDragDropComponent', () => {
  let component: MisceDragDropComponent;
  let fixture: ComponentFixture<MisceDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisceDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisceDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
