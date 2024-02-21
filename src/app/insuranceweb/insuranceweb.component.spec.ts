import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancewebComponent } from './insuranceweb.component';

describe('InsurancewebComponent', () => {
  let component: InsurancewebComponent;
  let fixture: ComponentFixture<InsurancewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancewebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
