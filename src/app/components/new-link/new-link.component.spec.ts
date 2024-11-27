import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLinkComponent } from './new-link.component';

describe('NewLinkComponent', () => {
  let component: NewLinkComponent;
  let fixture: ComponentFixture<NewLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
