import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegbiryaniComponent } from './nonvegbiryani.component';

describe('NonvegbiryaniComponent', () => {
  let component: NonvegbiryaniComponent;
  let fixture: ComponentFixture<NonvegbiryaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonvegbiryaniComponent]
    });
    fixture = TestBed.createComponent(NonvegbiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
