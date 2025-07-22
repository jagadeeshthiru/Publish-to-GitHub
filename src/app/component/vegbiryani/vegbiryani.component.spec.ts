import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegbiryaniComponent } from './vegbiryani.component';

describe('VegbiryaniComponent', () => {
  let component: VegbiryaniComponent;
  let fixture: ComponentFixture<VegbiryaniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegbiryaniComponent]
    });
    fixture = TestBed.createComponent(VegbiryaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
