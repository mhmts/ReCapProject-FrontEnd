import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl: string = 'https://localhost:44361/api/color/getAll';
  constructor(private httpclient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpclient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}