import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showvideo3Component } from './showvideo3.component';

describe('Showvideo3Component', () => {
  let component: Showvideo3Component;
  let fixture: ComponentFixture<Showvideo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showvideo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showvideo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
