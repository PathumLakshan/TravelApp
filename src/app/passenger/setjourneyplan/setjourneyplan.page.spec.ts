import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetjourneyplanPage } from './setjourneyplan.page';

describe('SetjourneyplanPage', () => {
  let component: SetjourneyplanPage;
  let fixture: ComponentFixture<SetjourneyplanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetjourneyplanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetjourneyplanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
