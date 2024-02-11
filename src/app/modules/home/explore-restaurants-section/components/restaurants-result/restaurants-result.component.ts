import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurants-result',
  templateUrl: './restaurants-result.component.html',
  styleUrls: ['./restaurants-result.component.scss']
})
export class RestaurantsResultComponent {

  @Input() resturants = []
}
