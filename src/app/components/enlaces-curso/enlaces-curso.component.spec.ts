import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesCursoComponent } from './enlaces-curso.component';

describe('EnlacesCursoComponent', () => {
  let component: EnlacesCursoComponent;
  let fixture: ComponentFixture<EnlacesCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
