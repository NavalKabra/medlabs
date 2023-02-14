import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actionName:string="SignIn";
 loggedUserDetails:any;
 cardCount!:any
 isLoginSuccess:boolean = false ;
 sub!:Subscription
 @ViewChild('closeBtn',{'read':ElementRef}) closeBtn!:ElementRef;
 @ViewChild('loginBtn',{'read':ElementRef}) loginBtn!:ElementRef;
  constructor(private auth:AuthenticationService,private shared:SharedService,private router:Router) { }
  
  ngOnInit(): void {
    this.loggedUserDetails = this.auth.getUser();
    if(this.auth.getToken()){
      this.isLoginSuccess = true ;
    }

    this.cardCount = this.shared.cartObs;
  }

  
  changeAction(action:string){
    this.actionName = action;
  }

  handleLoginSuccess(flag:boolean){
    if(flag){
      this.isLoginSuccess = true ;
      this.loggedUserDetails = this.auth.getUser();
      this.cardCount
      this.closeBtn.nativeElement.click();
    }
  }
  onLogOut(){
    this.isLoginSuccess = false ;
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
    localStorage.removeItem('products')

  }
  redirectToCart(){
    if(this.isLoginSuccess){
      this.router.navigate(['cart'])
    }else {
       this.loginBtn.nativeElement.click();
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}