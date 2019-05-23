import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarIndispComponent } from './consultar-indisp.component';

describe('ConsultarIndispComponent', () => {
  let component: ConsultarIndispComponent;
  let fixture: ComponentFixture<ConsultarIndispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarIndispComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarIndispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

