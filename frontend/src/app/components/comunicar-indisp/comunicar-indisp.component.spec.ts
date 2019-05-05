import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicarIndispComponent } from './comunicar-indisp.component';

describe('ComunicarIndispComponent', () => {
  let component: ComunicarIndispComponent;
  let fixture: ComponentFixture<ComunicarIndispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicarIndispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicarIndispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
