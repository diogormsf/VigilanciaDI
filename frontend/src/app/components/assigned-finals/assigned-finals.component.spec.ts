import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedFinalsComponent } from './assigned-finals.component';

describe('AssignedFinalsComponent', () => {
  let component: AssignedFinalsComponent;
  let fixture: ComponentFixture<AssignedFinalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedFinalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedFinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
