import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDentistasComponent } from './agregar-dentistas.component';

describe('AgregarDentistasComponent', () => {
  let component: AgregarDentistasComponent;
  let fixture: ComponentFixture<AgregarDentistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDentistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
