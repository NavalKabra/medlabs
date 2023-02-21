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
  isSignUpSuccess:boolean=false;
  sub!:Subscription;

  otpMessage:boolean=false;
  signUpComplete:boolean=false;
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpService) { }

  ngOnInit(): void {
    this.createSignUpForm()
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      'userName': ['', [Validators.required]],
      'mobileNo': ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      'password': ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      'isMobileNoVerified': [false, []]
    })
  }

  getOtp(){
    this.isGetOtp = true; 
    // generate 4 digit randome otp
    this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
    alert(this.otpGenerated);

    // 
    var emittedNo = interval(1000);
    this.sub = emittedNo.subscribe((res:any) =>{
    this.otpTimer = 60 - res;
    if (this.otpTimer == 0){
      this.sub.unsubscribe();
      this.otpMessage=true;
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
        if(response){
          this.isSignUpSuccess=true;
          console.log(response);
          this.signUpForm.reset()
          
        }else{
          this.isSignUpSuccess=false;
        }
      })
    } 
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
