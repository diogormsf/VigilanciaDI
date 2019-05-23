import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVigilantesComponent } from './consultar-vigilantes.component';

describe('ConsultarVigilantesComponent', () => {
  let component: ConsultarVigilantesComponent;
  let fixture: ComponentFixture<ConsultarVigilantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarVigilantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVigilantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
