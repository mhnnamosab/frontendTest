import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AdsSectionComponent } from './ads-section/ads-section.component';
import { FeaturedRestaurantsListComponent } from './featured-restaurants-list/featured-restaurants-list.component';
import { ExploreRestaurantsSectionComponent } from './explore-restaurants-section/explore-restaurants-section.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroSectionComponent },
  { path: 'ads', component: AdsSectionComponent },
  { path: 'featured', component: FeaturedRestaurantsListComponent },
  { path: 'explore', component: ExploreRestaurantsSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
