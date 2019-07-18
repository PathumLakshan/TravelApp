import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdriverPage } from './regdriver.page';

describe('RegdriverPage', () => {
  let component: RegdriverPage;
  let fixture: ComponentFixture<RegdriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegdriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
