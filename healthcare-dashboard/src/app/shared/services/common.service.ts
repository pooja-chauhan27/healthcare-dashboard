import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  // url for users and appointments
  public userUrl = 'http://localhost:3000/user';
  public appointmentUrl = 'http://localhost:3000/appointments';

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
}