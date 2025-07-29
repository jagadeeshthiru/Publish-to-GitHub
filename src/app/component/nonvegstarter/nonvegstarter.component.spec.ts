import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegstarterComponent } from './nonvegstarter.component';

describe('NonvegstarterComponent', () => {
  let component: NonvegstarterComponent;
  let fixture: ComponentFixture<NonvegstarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonvegstarterComponent]
    });
    fixture = TestBed.createComponent(NonvegstarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
