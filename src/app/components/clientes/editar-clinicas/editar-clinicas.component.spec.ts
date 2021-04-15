import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClinicasComponent } from './editar-clinicas.component';

describe('EditarClinicasComponent', () => {
  let component: EditarClinicasComponent;
  let fixture: ComponentFixture<EditarClinicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarClinicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
