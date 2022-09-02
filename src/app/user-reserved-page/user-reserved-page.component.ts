import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from './view-info';

@Component({
  selector: 'app-user-reserved-page',
  templateUrl: './user-reserved-page.component.html',
  styleUrls: ['./user-reserved-page.component.scss']
})
export class UserReservedPageComponent implements OnInit {

  data:any;
  token: any;
  username: any = localStorage.getItem('username');
  email:any = localStorage.getItem('email');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
