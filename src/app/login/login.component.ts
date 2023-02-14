import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  isNewUser:boolean=false;
  constructor(private fb: FormBuilder, private http: HttpService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      'mobileNo': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })

  }
  login() {
    const params: HttpParams = new HttpParams()
    .set('mobileNo', this.loginForm.controls['mobileNo'].value)
    .set('password', this.loginForm.controls['password'].value)
  
    this.http.getDetailsFromServer('users',params).subscribe((response:any)=>{
      if(response && response.length >0){
        var user = response[0];
        user['token'] = "nskdnsDFFDGDdsdk12";
        localStorage.setItem('authToken',JSON.parse(user['token']));
        localStorage.setItem('user', user);
        this.isNewUser=false;

      }else{
        this.isNewUser = true;
      }
    })
  }


}
