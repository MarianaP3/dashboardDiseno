import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressOfActivitiesComponent } from './progress-of-activities.component';

describe('ProgressOfActivitiesComponent', () => {
  let component: ProgressOfActivitiesComponent;
  let fixture: ComponentFixture<ProgressOfActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressOfActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressOfActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
