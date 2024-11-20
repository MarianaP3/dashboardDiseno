import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProgressGraphicsComponent } from './modal-progress-graphics.component';

describe('ModalProgressGraphicsComponent', () => {
  let component: ModalProgressGraphicsComponent;
  let fixture: ComponentFixture<ModalProgressGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProgressGraphicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProgressGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
