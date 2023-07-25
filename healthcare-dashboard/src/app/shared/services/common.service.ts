import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // url for users and appointments
  public baseUrl = 'http://localhost:3000';
  public userUrl = 'http://localhost:3000/user';
  public appointmentUrl = 'http://localhost:3000/appointments';
  public isCollapsed = true;

  constructor(private http: HttpClient) {}

  // get request for appointments
  getAppointment(): Observable<any> {
    return this.http.get<any>(this.appointmentUrl);
  }

  //delete method for appointment
  deleteAppointment(id: any) {
    let idUrl = this.appointmentUrl + '/' + id;
    console.log(idUrl);
    return this.http.delete(idUrl);
  }

  //get id based on url
  getUserId(id: any) {
    return this.http.get(this.appointmentUrl + '/' + id);
  }

  //update method for appointment
  updateAppointment(id: any, data: any) {
    let idUrl = this.appointmentUrl + '/' + id;
    return this.http.put(idUrl, data);
  }

  //post data to the API
  // addAppointment(data: any) {
  //   return this.http.post(`http://localhost:3000/appointments`, data);
  // }

  // login
  login(data: any) {
    return this.http.post(
      `http://localhost:3000/registrations?userEmail=${data.userEmail}&&userPassword=${data.userPassword}`,
      data
    );
  }

  // register user
  registerUser(data: any) {
    return this.http.post(this.baseUrl + '/registrations', data);
  }

  // get register user information
  getRegisterUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/registrations');
  }
}
