import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showvideo2Component } from './showvideo2.component';

describe('Showvideo2Component', () => {
  let component: Showvideo2Component;
  let fixture: ComponentFixture<Showvideo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showvideo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showvideo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
