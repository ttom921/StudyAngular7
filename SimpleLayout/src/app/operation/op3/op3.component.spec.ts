import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op3Component } from './op3.component';

describe('Op3Component', () => {
  let component: Op3Component;
  let fixture: ComponentFixture<Op3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
