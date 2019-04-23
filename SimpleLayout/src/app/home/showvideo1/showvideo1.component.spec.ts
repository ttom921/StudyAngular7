import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showvideo1Component } from './showvideo1.component';

describe('Showvideo1Component', () => {
  let component: Showvideo1Component;
  let fixture: ComponentFixture<Showvideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showvideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showvideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
