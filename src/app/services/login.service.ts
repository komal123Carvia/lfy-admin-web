import { Injectable } from '@angular/core';
import * as http from "http";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // constructor() {private http:HttpClient }
  //
  // getOtp(requestPayload: any): Promise<any> {
  //   return this.http.post<any>
  //   (`${environment.url}listingfy-auth/account/otp/send`, userPayload, this.httpOptions).toPromise();
  // }
}
