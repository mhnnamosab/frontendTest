import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRestaurantsListComponent } from './featured-restaurants-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from 'src/app/shared/services/crud/crud.service';

describe('FeaturedRestaurantsListComponent', () => {
  let component: FeaturedRestaurantsListComponent;
  let fixture: ComponentFixture<FeaturedRestaurantsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedRestaurantsListComponent],
      imports: [HttpClientModule],
      providers: [CrudService]
    });
    fixture = TestBed.createComponent(FeaturedRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
