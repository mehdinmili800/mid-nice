import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1Component } from './checkout1.component';

describe('Checkout1Component', () => {
  let component: Checkout1Component;
  let fixture: ComponentFixture<Checkout1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Checkout1Component]
    });
    fixture = TestBed.createComponent(Checkout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
