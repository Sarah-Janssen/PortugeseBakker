import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekkernijenComponent } from './lekkernijen.component';

describe('LekkernijenComponent', () => {
  let component: LekkernijenComponent;
  let fixture: ComponentFixture<LekkernijenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LekkernijenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LekkernijenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
