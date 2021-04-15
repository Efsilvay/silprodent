import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformadasComponent } from './informadas.component';

describe('InformadasComponent', () => {
  let component: InformadasComponent;
  let fixture: ComponentFixture<InformadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
