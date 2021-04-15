import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminadasComponent } from './terminadas.component';

describe('TerminadasComponent', () => {
  let component: TerminadasComponent;
  let fixture: ComponentFixture<TerminadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
