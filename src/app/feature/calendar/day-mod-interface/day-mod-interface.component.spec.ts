import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayModInterfaceComponent } from './day-mod-interface.component';

describe('DayModInterfaceComponent', () => {
  let component: DayModInterfaceComponent;
  let fixture: ComponentFixture<DayModInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayModInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayModInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
