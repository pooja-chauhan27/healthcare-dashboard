import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  user: any = [];
  editFormGroup = new FormGroup({
    image: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    visitTime: new FormControl(''),
    doctor: new FormControl(''),
    conditions: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.commonService.getUserId(id).subscribe((result) => {
      // console.log(result);
      this.user = result;
      this.editFormGroup = new FormGroup({
        image: new FormControl(this.user.image),
        name: new FormControl(this.user.name),
        email: new FormControl(this.user.email),
        date: new FormControl(this.user.date),
        visitTime: new FormControl(this.user.visitTime),
        doctor: new FormControl(this.user.doctor),
        conditions: new FormControl(this.user.conditions),
      });
    });
  }
  update() {
    this.commonService
      .updateAppointment(
        this.route.snapshot.params['id'],
        this.editFormGroup.value
      )
      .subscribe((result) => {
        console.log(result);
      });
    setTimeout(() => {
      this.router.navigate(['', '/']);
    }, 1000);
  }
}
