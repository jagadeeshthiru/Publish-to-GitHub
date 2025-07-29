import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsandsnacksComponent } from './dessertsandsnacks.component';

describe('DessertsandsnacksComponent', () => {
  let component: DessertsandsnacksComponent;
  let fixture: ComponentFixture<DessertsandsnacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsandsnacksComponent]
    });
    fixture = TestBed.createComponent(DessertsandsnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
