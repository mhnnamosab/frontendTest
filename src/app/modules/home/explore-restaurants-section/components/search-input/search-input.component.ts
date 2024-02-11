import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  areas: any = []
  searchInput = new FormControl('');
  placeInput = new FormControl('');
  filteredPlaces: any
  autocompleteInput: string = '';
  queryWait: boolean = false;
  @ViewChild('addresstext') addresstext: any;
  @Output() search = new EventEmitter<string>()
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.subscripeToSearch()
    this.subscripeToPlaceAutocomplete()
  }

  subscripeToSearch() {
    this.searchInput.valueChanges.pipe(debounceTime(700)).subscribe((searchValue) => {
      this.emitSearch(searchValue as string)
    });
  }
  emitSearch(searchValue : string | null){
    this.search.emit(searchValue ?? '')
  }
  subscripeToPlaceAutocomplete() {

  }

  handleAddressChange(event:any){
    console.log(event)
  }
 
}
