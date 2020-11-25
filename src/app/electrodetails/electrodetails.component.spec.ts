import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodetailsComponent } from './electrodetails.component';

describe('ElectrodetailsComponent', () => {
  let component: ElectrodetailsComponent;
  let fixture: ComponentFixture<ElectrodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectrodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
