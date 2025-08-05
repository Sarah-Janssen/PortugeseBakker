import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelDetailsComponent } from './pastel-details.component';

describe('PastelDetailsComponent', () => {
  let component: PastelDetailsComponent;
  let fixture: ComponentFixture<PastelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastelDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
