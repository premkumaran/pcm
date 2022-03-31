import { Component, OnInit, ViewChild } from '@angular/core';
// import {MatAccordion} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: any;
  pname: any;
  price: any;
  id:any=localStorage.getItem("id")
  cat: any = [];
  product: any = [];
  iscategory: boolean = false;
  isproduct: boolean = false;
  url = "http://localhost:4200/api/"
  constructor(public http: HttpClient,public router:Router) {}

  ngOnInit(): void {
    console.log(this.id);
    
  }
  Add() {
    this.http.post<any>(this.url + "create", { name: this.name,id:this.id }).subscribe(() => {
     
    });
    console.log(this.name);
    this.getdata();
    this.iscategory = true;
  }
  getdata() {
    this.http.get<any>(this.url + 'detail').subscribe((res) => {
      this.cat = res;
    });
  }
  Added() {
    this.http.post<any>(this.url + "added", { name: this.pname,price:this.price}).subscribe(() => {
     
    });
    this.router.navigate(["/home"]);
  }
  
  go() {
    this.isproduct = true;
  }
}