import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintanenceComponent } from './maintanence.component';

describe('MaintanenceComponent', () => {
  let component: MaintanenceComponent;
  let fixture: ComponentFixture<MaintanenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintanenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
