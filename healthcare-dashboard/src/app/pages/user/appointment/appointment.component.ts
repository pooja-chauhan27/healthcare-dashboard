import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
  constructor(private commonService: CommonService, private router: Router) {}
  appointments: any[] = [];
  ngOnInit(): void {
    // get request
    this.commonService.getAppointment().subscribe((response: any[]) => {
      this.appointments = response;
    });
  }

  // delete appointment
  delete(id: any, i: any) {
    if (confirm('Are you sure you want to delete!') == true) {
      this.appointments.splice(i, 1);
      this.commonService.deleteAppointment(id).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
