import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { FakeApiService } from 'src/app/shared/services/fakeApi/fakeApi.service';

@Component({
  selector: 'app-ads-section',
  templateUrl: './ads-section.component.html',
  styleUrls: ['./ads-section.component.scss']
})
export class AdsSectionComponent implements OnInit{
  constructor(private fakeApiService :FakeApiService){

  }
  $adsList  =new Observable<any>()
  ngOnInit(): void {
    this.getAdsList()
  }

  getAdsList(){
    this.$adsList =  this.fakeApiService.get('ads.json')
   }
}
