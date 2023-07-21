import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:3000/appointments';

  appointments: any[] = [];
  ngOnInit(): void {
    this.getHeroes().subscribe((response) => {
      this.appointments = response;
      console.log(this.appointments);
    });
  }

  getHeroes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
