import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresoAlumnoComponent } from './progreso-alumno.component';

describe('AppProgresoAlumnoComponent', () => {
  let component: ProgresoAlumnoComponent;
  let fixture: ComponentFixture<ProgresoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresoAlumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
