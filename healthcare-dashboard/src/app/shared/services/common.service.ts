import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // url for users and appointments
  public baseUrl = 'http://localhost:3000';
  public isCollapsed = true;
  public adminDashboard: boolean = false;
  public userDashboard: boolean = true;
  // authentication guard
  public authentication: boolean = false;

  constructor(private http: HttpClient) {}

  // get request for appointments
  getAppointment(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/appointments');
  }

  //delete method for appointment
  deleteAppointment(id: any) {
    let idUrl = this.baseUrl + '/appointments/' + id;
    console.log(idUrl);
    return this.http.delete(idUrl);
  }

  //get id based on url
  getUserId(id: any) {
    return this.http.get(this.baseUrl + '/appointments/' + id);
  }

  //update method for appointment
  updateAppointment(id: any, data: any) {
    return this.http.put(this.baseUrl + '/appointments/' + id, data);
  }

  //post data to the API
  // addAppointment(data: any) {
  //   return this.http.post((this.baseUrl + '/appointments', data);
  // }

  // login user
  login() {
    return this.http.get<any>(this.baseUrl + '/registrations');
  }

  //logout functionality
  logout() {
    localStorage.removeItem('isLogged');
  }

  // register user
  registerUser(data: any) {
    return this.http.post(this.baseUrl + '/registrations', data);
  }

  // get register users information
  getRegisterUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/registrations');
  }
}
