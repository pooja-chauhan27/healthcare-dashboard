import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  registerUser: any[] = [];
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.commonService.getRegisterUser().subscribe((result) => {
      console.log(result);
      this.registerUser = result;
    });
  }
}
