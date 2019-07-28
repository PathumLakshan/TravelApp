import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsGeoPage } from './maps-geo.page';

describe('MapsGeoPage', () => {
  let component: MapsGeoPage;
  let fixture: ComponentFixture<MapsGeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsGeoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsGeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
