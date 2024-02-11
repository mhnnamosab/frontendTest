import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsResultComponent } from './restaurants-result.component';

describe('RestaurantsResultComponent', () => {
  let component: RestaurantsResultComponent;
  let fixture: ComponentFixture<RestaurantsResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsResultComponent]
    });
    fixture = TestBed.createComponent(RestaurantsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
