import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelsComponent } from './pastels.component';

describe('PastelsComponent', () => {
  let component: PastelsComponent;
  let fixture: ComponentFixture<PastelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
