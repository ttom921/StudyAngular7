import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Miscepage2Component } from './miscepage2.component';

describe('Miscepage2Component', () => {
  let component: Miscepage2Component;
  let fixture: ComponentFixture<Miscepage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Miscepage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Miscepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
