import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  log: users = new users;

  isregister: boolean = false;

  url = "http://localhost:4200/api/"

  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    
    this.http.post<any>(this.url+"users", this.log).subscribe((res:any) => {
      console.log(res.data[0].userid);
      localStorage.setItem("id",res.data[0].userid)
      if (res.status==="success") {
        this.router.navigate(["/home"])
      }

    else{
          console.log("something went wrong");   
      }
    });
  }
  
  reg() {
    this.isregister = true;
  }

  register() {
    this.http.post<any>(this.url+"insert", this.log).subscribe((res) => {
      this.log = res;
    });
    this.router.navigate(["/home"])
  }
}

