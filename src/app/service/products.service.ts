import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  get(searchString:string = "", from=0, to=8){
    let params = { 
      "searchString":searchString,
      "from": from,
      "to":to
    };

    let headers = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImZyb250RW5kRGV2Iiwic3ViIjoiZnJvbnRFbmREZXYiLCJyb2xlIjoiVXNlciIsImlzcyI6ImFwcC5jdXN0b21pbHkuY29tIiwiYXVkIjoiYWxsIiwiZXhwIjoxNjM0OTUwMTA5LCJuYmYiOjE2MzIzNTgxMDl9.8TzxZ_niRuyDxh9EHZIy94awehCedL3nLjqa50fEKM8",
      "Content-Type": "application/json"
    };

    return this.http.get('/api/Product/GetProductsFromTo', {params:params, headers:headers}).pipe();
  }

  count(searchString:string = ""){
    let params = { 
      "searchString":searchString
    };

    let headers = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImZyb250RW5kRGV2Iiwic3ViIjoiZnJvbnRFbmREZXYiLCJyb2xlIjoiVXNlciIsImlzcyI6ImFwcC5jdXN0b21pbHkuY29tIiwiYXVkIjoiYWxsIiwiZXhwIjoxNjM0OTUwMTA5LCJuYmYiOjE2MzIzNTgxMDl9.8TzxZ_niRuyDxh9EHZIy94awehCedL3nLjqa50fEKM8",
      "Content-Type": "application/json"
      /*"Access-Control-Allow-Origin": "*",
      "Origin":"*"*/
    };

    return this.http.get('/api/Product/GetProductsCount', {params:params, headers:headers}).pipe();
  }

}
