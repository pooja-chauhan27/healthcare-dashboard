import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public appointments: any[] = [];

  constructor(private commonService: CommonService) {}


  ngOnInit(): void {
    // get request
    this.commonService.getAppointment().subscribe((response: any[]) => {
      this.appointments = response;
    });
  }

  // delete appointment
  public delete(id: any, i: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.appointments.splice(i, 1);
        this.commonService.deleteAppointment(id).subscribe((response) => {
          console.log(response);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
