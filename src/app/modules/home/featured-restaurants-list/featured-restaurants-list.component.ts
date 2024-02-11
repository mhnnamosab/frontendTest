import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud/crud.service';

@Component({
  selector: 'app-featured-restaurants-list',
  templateUrl: './featured-restaurants-list.component.html',
  styleUrls: ['./featured-restaurants-list.component.scss']
})
export class FeaturedRestaurantsListComponent implements OnInit {
  constructor(private crudService :CrudService){

  }
  $featuredList = new Observable<any>()
  ngOnInit(): void {
    this.getFeaturedList()
  }

  getFeaturedList(){
   this.$featuredList =  this.crudService.get('categories/1/featured')
  }
}
