import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionadasComponent } from './recepcionadas.component';

describe('RecepcionadasComponent', () => {
  let component: RecepcionadasComponent;
  let fixture: ComponentFixture<RecepcionadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
