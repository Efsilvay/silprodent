import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachadasComponent } from './despachadas.component';

describe('DespachadasComponent', () => {
  let component: DespachadasComponent;
  let fixture: ComponentFixture<DespachadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespachadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespachadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
