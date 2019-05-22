import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSalasComponent } from './consultar-salas.component';

describe('ConsultarSalasComponent', () => {
  let component: ConsultarSalasComponent;
  let fixture: ComponentFixture<ConsultarSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
