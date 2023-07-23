import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {
  constructor(private commonService: CommonService) {}

  appointments: any[] = [];
  ngOnInit(): void {
    // get request
    this.commonService.getAppointment().subscribe((response: any[]) => {
      this.appointments = response;
      console.log(this.appointments);
    });
  }
}
