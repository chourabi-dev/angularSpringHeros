import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  connectForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    
  })
  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  connect(){
    const res = this.connectForm.value;

    // test username = 'admin' password:'admin'

    if (res.username === 'admin' && res.password==="admin") {
      // we will simulate the server response 
      // creation custom token !!
      const token = new Date().getTime()+'-'+res.username;
      this.auth.setToken(token);
      
      // redirect to home !!!
      this.router.navigateByUrl('/home') // clear !!!

    }else{
      alert('wrong username or password')
    }
    
  }

}
