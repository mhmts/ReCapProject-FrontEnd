import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl: string = 'https://localhost:44361/api/customer/getAll';
  constructor(private httpclient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpclient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}