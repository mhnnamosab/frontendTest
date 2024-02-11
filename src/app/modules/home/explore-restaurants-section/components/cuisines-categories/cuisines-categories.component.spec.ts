import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesCategoriesComponent } from './cuisines-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from 'src/app/shared/services/crud/crud.service';

describe('CuisinesCategoriesComponent', () => {
  let component: CuisinesCategoriesComponent;
  let fixture: ComponentFixture<CuisinesCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuisinesCategoriesComponent],
      imports: [HttpClientModule],
      providers: [CrudService]
    });
    fixture = TestBed.createComponent(CuisinesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
