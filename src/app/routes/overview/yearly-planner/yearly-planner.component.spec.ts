import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyPlannerComponent } from './yearly-planner.component';

describe('YearlyPlannerComponent', () => {
  let component: YearlyPlannerComponent;
  let fixture: ComponentFixture<YearlyPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearlyPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearlyPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
