import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form={
    email:null,
    name:null,
    password:null,
    password_confirmation:null};
  constructor(private http: HttpClient) { }
  public error=[];
  ngOnInit(): void {
  }
  onSubmit(){
    // return this.http.post("http://localhost:4000/api/signup",this.form).subscribe(
    // data=>console.log(data),
    // error=>console.log(error)
    // )
    console.log(this.form);
    }
//     handleError(error:any){
// this.error=error.error.errors;
// ;
// ;

    }

