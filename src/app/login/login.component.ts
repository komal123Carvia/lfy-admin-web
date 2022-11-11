import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formMobile!: FormGroup;
  formOtp!: FormGroup;
  visible1 = true;
  visible2 = false;

  showloader = false;
  registerFormVisible = false;
  mobile = '';
  token = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['dashboard']);
      return;
    }
    this.formMobile = this.fb.group({
      mobile: ['', Validators.required]
    });
    this.formOtp = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
    if (typeof this.mobile === 'number') {
      this.mobile = 'string';
    }


  }

  getOtp(): void {
    this.showloader = true;
      this.visible1 = false;
      this.visible2 = true;
      console.log(this.visible2)
    // if (this.formEmail.invalid) {
    //   return;
    // }
    // this.service.getOtp({email: this.formEmail.get('email').value}).then(res => {
    //   this.nonce = res['nonce'];
    //   this.email =  this.formEmail.get('email').value;
    //   this.visible1 = false;
    //   this.visible2 = true;
    //   this.orgEmail = this.formEmail.get('email').value;
    //   this.showloader = false;
    // }, e => {
    //   console.log(e);
    // });
  }

}
