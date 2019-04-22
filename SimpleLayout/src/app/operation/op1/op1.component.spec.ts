import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op1Component } from './op1.component';

describe('Op1Component', () => {
  let component: Op1Component;
  let fixture: ComponentFixture<Op1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
