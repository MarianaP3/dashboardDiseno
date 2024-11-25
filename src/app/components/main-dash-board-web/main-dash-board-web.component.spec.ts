import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashBoardWebComponent } from './main-dash-board-web.component';

describe('MainDashBoardWebComponent', () => {
  let component: MainDashBoardWebComponent;
  let fixture: ComponentFixture<MainDashBoardWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashBoardWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashBoardWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
