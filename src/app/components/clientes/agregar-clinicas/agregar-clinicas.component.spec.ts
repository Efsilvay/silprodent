import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarClinicasComponent } from './agregar-clinicas.component';

describe('AgregarClienteComponent', () => {
  let component: AgregarClinicasComponent;
  let fixture: ComponentFixture<AgregarClinicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarClinicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
