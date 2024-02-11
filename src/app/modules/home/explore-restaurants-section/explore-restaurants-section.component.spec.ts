import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ExploreRestaurantsSectionComponent } from './explore-restaurants-section.component';
import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { HttpClientModule } from '@angular/common/http';

describe('ExploreRestaurantsSectionComponent', () => {
  let component: ExploreRestaurantsSectionComponent;
  let fixture: ComponentFixture<ExploreRestaurantsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreRestaurantsSectionComponent],
      imports: [HttpClientModule],
      providers: [CrudService]
    });
    fixture = TestBed.createComponent(ExploreRestaurantsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
