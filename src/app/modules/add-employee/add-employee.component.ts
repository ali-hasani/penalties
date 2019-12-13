import { Component, OnInit, Input, Inject } from '@angular/core';
import { NbDialogRef, NbDialogConfig, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  employee: Employee = new Employee();
  ngOnInit() {
    this.employeeService.getById(this.data.id).subscribe(result => {
      this.employee = result;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
