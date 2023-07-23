import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private commonService: CommonService, private router: Router) {}

  appointments: any[] = [];
  ngOnInit(): void {
    // get request
    this.commonService.getAppointment().subscribe((response: any[]) => {
      this.appointments = response;
      // console.log(this.appointments);
    });

    //delete id
  }

  delete(id: any, i: any) {
    console.log(id, i);
    this.appointments.splice(i, 1);
    // console.log(this.appointments);
    this.commonService.deleteAppointment(id).subscribe((response) => {
      console.log(response);
    });
  }
}
