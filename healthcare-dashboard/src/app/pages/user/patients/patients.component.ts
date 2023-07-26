import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  public registerUser: any[] = [];
  
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getRegisterUser().subscribe((result) => {
      this.registerUser = result;
    });
  }
}
