import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Showvideo4Component } from './showvideo4.component';

describe('Showvideo4Component', () => {
  let component: Showvideo4Component;
  let fixture: ComponentFixture<Showvideo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Showvideo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Showvideo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
