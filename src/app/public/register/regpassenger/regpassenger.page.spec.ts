import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpassengerPage } from './regpassenger.page';

describe('RegpassengerPage', () => {
  let component: RegpassengerPage;
  let fixture: ComponentFixture<RegpassengerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpassengerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
