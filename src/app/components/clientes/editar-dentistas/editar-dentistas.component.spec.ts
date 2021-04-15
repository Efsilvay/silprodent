import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDentistasComponent } from './editar-dentistas.component';

describe('EditarDentistasComponent', () => {
  let component: EditarDentistasComponent;
  let fixture: ComponentFixture<EditarDentistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDentistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
