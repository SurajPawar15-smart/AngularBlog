import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form={email:null,password:null};
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // return this.http.post("http://localhost:4000/api/login",this.form).subscribe(
    // data=>console.log(data),
    // error=>console.log(error)
    // )
    // }
    console.log(this.form);
    this.router.navigateByUrl('/profile');
  }

}
