import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  logout(e){
    e.preventDefault();

    if (confirm('Do you really want to log out ?')) {
      localStorage.clear();
      // redirect to login
      this.router.navigateByUrl('/login')

    }
  }

}
