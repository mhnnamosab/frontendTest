import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AdsSectionComponent } from './ads-section/ads-section.component';
import { FeaturedRestaurantsListComponent } from './featured-restaurants-list/featured-restaurants-list.component';
import { ExploreRestaurantsSectionComponent } from './explore-restaurants-section/explore-restaurants-section.component';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { NavigationComponent } from 'src/app/standalone-components/navigation/navigation.component';
import { SearchInputComponent } from './explore-restaurants-section/components/search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CuisinesCategoriesComponent } from './explore-restaurants-section/components/cuisines-categories/cuisines-categories.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RestaurantCardComponent } from './explore-restaurants-section/components/restaurant-card/restaurant-card.component';
import { RestaurantsResultComponent } from './explore-restaurants-section/components/restaurants-result/restaurants-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    HeroSectionComponent,
    AdsSectionComponent,
    FeaturedRestaurantsListComponent,
    ExploreRestaurantsSectionComponent,
    HomeComponent,
    SearchInputComponent,
    CuisinesCategoriesComponent,
    RestaurantCardComponent,
    RestaurantsResultComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    NavigationComponent,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    NgxGpAutocompleteModule
  ]
})
export class HomeModule { }
