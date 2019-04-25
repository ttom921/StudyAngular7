import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Miscepage1Component } from './miscepage1.component';

describe('Miscepage1Component', () => {
  let component: Miscepage1Component;
  let fixture: ComponentFixture<Miscepage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Miscepage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Miscepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
