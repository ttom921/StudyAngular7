import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Op2Component } from './op2.component';

describe('Op2Component', () => {
  let component: Op2Component;
  let fixture: ComponentFixture<Op2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Op2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Op2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
