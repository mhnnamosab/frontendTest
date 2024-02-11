import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, finalize, map, merge } from 'rxjs';
import { CrudService } from 'src/app/shared/services/crud/crud.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-explore-restaurants-section',
  templateUrl: './explore-restaurants-section.component.html',
  styleUrls: ['./explore-restaurants-section.component.scss']
})
export class ExploreRestaurantsSectionComponent implements OnInit {

  resturants: any = []
  limit = 5
  start = 0
  searchKeyword = ''
  hasMoreItems = true;
  loading = false
  constructor(private crudService: CrudService, @Inject(PLATFORM_ID) private platformId: Object) {
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (isPlatformBrowser(this.platformId) && this.isScrolledToBottom()  && this.hasMoreItems) {
      this.start += this.limit;
      this.getResturants();
    }
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    }

    this.getResturants()
  }

  onSearch(value: string) {
    this.searchKeyword = value
    this.resturants = []
    this.resetPagination()
    this.getResturants()
  }

  getResturants() {
    this.loading = true
    this.crudService.get('service-providers/1/search', this.prepareFilter())
      .pipe(finalize(() => this.loading = false)).subscribe(res => {
        this.resturants = [...this.resturants, ...res]
        this.hasMoreItems = (res.length != 0);
      })
  }

  prepareFilter() {
    let filter = {
      name_contains: this.searchKeyword,
      _start: this.start,
      _limit: this.limit
    }
    return filter
  }
  private isScrolledToBottom(): boolean {
    const windowHeight: any = window.innerHeight
    const scrollY: any = window.scrollY
    const contentHeight: any = document.documentElement.scrollHeight;
    return contentHeight - (scrollY + windowHeight) < 1;
  }
  resetPagination() {
    this.limit = 5
    this.start = 0
  }
}
