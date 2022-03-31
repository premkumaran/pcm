import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any = [];
  url = "http://localhost:4200/api/"
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct() {
    this.http.get<any>(this.url + 'productdetail').subscribe((res) => {
      this.product = res;
      console.log(this.product);
      
    });
    
  }
}
