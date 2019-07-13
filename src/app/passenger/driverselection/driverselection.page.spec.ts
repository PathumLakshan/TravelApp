import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverselectionPage } from './driverselection.page';

describe('DriverselectionPage', () => {
  let component: DriverselectionPage;
  let fixture: ComponentFixture<DriverselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
