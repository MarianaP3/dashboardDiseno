import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashBoardMobileComponent } from './main-dash-board-mobile.component';

describe('MainDashBoardMobileComponent', () => {
  let component: MainDashBoardMobileComponent;
  let fixture: ComponentFixture<MainDashBoardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashBoardMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashBoardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
