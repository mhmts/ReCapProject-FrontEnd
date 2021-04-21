import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44361/api/rental/getallDto';
  constructor(private httpclient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpclient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}