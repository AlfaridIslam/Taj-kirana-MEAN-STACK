import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodgrainsComponent } from './foodgrains.component';

describe('FoodgrainsComponent', () => {
  let component: FoodgrainsComponent;
  let fixture: ComponentFixture<FoodgrainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodgrainsComponent]
    });
    fixture = TestBed.createComponent(FoodgrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
