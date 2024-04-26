import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperCompanyComponent } from './developer-company.component';

describe('DeveloperCompanyComponent', () => {
  let component: DeveloperCompanyComponent;
  let fixture: ComponentFixture<DeveloperCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperCompanyComponent]
    });
    fixture = TestBed.createComponent(DeveloperCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
