import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, interval } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  isGetOtp: boolean = false;
  isVerifyOtp: boolean = false;
  otpGenerated!:number;
  otpTimer!:number;
  sub!:Subscription;

  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.createSignUpForm()
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      'userName': ['', [Validators.required]],
      'mobileNo': ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      'password': ['', [Validators.required]],
      'isMobileNoVerified': [false, []]
    })
  }

  getOtp(){
    this.isGetOtp = true; 
    // generate 4 digit randome otp
    this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
    console.log(this.otpGenerated);

    // 
    var emittedNo = interval(1000);
    this.sub = emittedNo.subscribe((res:any) =>{
    this.otpTimer = 60 - res;
    if (this.otpTimer == 0){
      this.sub.unsubscribe();
    }
    })

  }
  verifyOtp(otpEntered:any){
    if(otpEntered==this.otpGenerated){
    this.isVerifyOtp = true;
    this.isGetOtp = false;
    this.signUpForm.controls['isMobileNoVerified'].setValue(true);
    this.sub.unsubscribe();
    }
  }

  signUp() {
    if(this.isVerifyOtp){
      console.log(this.signUpForm.value);
      this.http.postDetailsToServer('users',this.signUpForm.value).subscribe((response:any)=>{
        if(response && response.length > 0){
          console.log(response);
        }
      })
    } 
  }
}
