import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service';


@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor(private apiService: ApiHandlerService) {}

  get(endpoint: string, params?: any) {
    return this.apiService.Get('../../../../assets/data/' + endpoint, params)
  }

 
}
