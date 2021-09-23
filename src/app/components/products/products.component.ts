import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service'
import {ProductsService} from '../../service/products.service'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
declare var window:any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  title = 'CustomilyTest';
  token:any = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImZyb250RW5kRGV2Iiwic3ViIjoiZnJvbnRFbmREZXYiLCJyb2xlIjoiVXNlciIsImlzcyI6ImFwcC5jdXN0b21pbHkuY29tIiwiYXVkIjoiYWxsIiwiZXhwIjoxNjM0OTYwODU3LCJuYmYiOjE2MzIzNjg4NTd9.ukeu6a8Zh6acb-QKvrZ7pRzkZ3IGWR-uWNccCWVh7c4";
  products:any = null;
  totalProducts:number = 0;
  pageSize:number = 5;
  urlBase:any = "https://app.customily.com";
  dateNow:any;
  page:number=1;
  scrollInfinite:boolean = true;


  constructor(
    private authService: AuthService,
    private productsService:ProductsService,
    private router: Router,
  ){
   this.authService.login("frontEndDev", "aecfqawZQU8PkpgU").subscribe(
      result => {
          console.log(result);
      },
      err => {
        console.log(err);
      }
    );
    this.countProducts();
   this.loadProducts();
   this.dateNow = new Date();

    //this.tmp();
    console.log(window.innerWidth);
  }

  countProducts(){
    this.productsService.count().subscribe(
      result => {
          this.totalProducts = parseInt(result.toString());
      },
      err => {
        console.log(err);
      }
    )
  }
  
  ngOnInit(): void {
  }

  loadProducts(){
    this.productsService.get().subscribe(
      result => {
        this.products = result;
          console.log(result);
      },
      err => {
        console.log(err);
      }
    )
  }

  open(id:string){
    console.log(id);
    this.router.navigate(["product"]);
  }

  conv(d:string){
    return new Date(d);
  }

  pageChange(){
    console.log(this.page);
  }

  onScroll(){
    this.scrollInfinite = false;
    console.log("onScroll");
    setTimeout ( ()=> this.scrollInfinite = true, 10000)
  }

  onResize(event:any) {
    console.log(event.target.innerWidth);
  }

}
