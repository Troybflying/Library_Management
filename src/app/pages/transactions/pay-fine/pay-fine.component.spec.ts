import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFineComponent } from './pay-fine.component';

describe('PayFineComponent', () => {
  let component: PayFineComponent;
  let fixture: ComponentFixture<PayFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
