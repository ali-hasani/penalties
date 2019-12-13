import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
