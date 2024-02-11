import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud/crud.service';

@Component({
  selector: 'app-cuisines-categories',
  templateUrl: './cuisines-categories.component.html',
  styleUrls: ['./cuisines-categories.component.scss']
})
export class CuisinesCategoriesComponent implements OnInit {
  $cuisines = new Observable<any>();

  constructor(private crudService: CrudService) {

  }
  ngOnInit(): void {
    this.getCuisineTypes()
  }
  getCuisineTypes() {
    this.$cuisines = this.crudService.get('cuisine-types');
  }
}
