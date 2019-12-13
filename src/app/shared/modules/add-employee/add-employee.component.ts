import { Component, OnInit, Input, Inject } from '@angular/core';
import { NbDialogRef, NbDialogConfig, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { ManipulationMode } from 'src/app/shared/enums/manipulation-mode.enum';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  acceptedFile = ".png,.jpg,.jpeg";
  title = 'تصویر کارمند';
  loading = false;
  mode: ManipulationMode = ManipulationMode.create;
  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  employee: Employee = new Employee();

  ngOnInit() {
    if (this.data) {
      this.mode = ManipulationMode.update;
      this.employeeService.getById(this.data.id).subscribe(result => {
        this.employee = result;
      });
    }
  }

  onFileChange(imageBlob) {
    this.employee.picture = imageBlob;
  }

  save() {
    this.loading = true;
    this.mode === ManipulationMode.update ? this.update() : this.add();
  }

  add() {
    this.employeeService.add(this.employee).subscribe(result => {
      if (result) {
        const data: DialogCloseData = { canceled: false };
        this.dialogRef.close(data);
      }
      this.loading = false;
    });
  }

  update() {
    this.employeeService.update(this.employee).subscribe(result => {
      if (result) {
        const data: DialogCloseData = { canceled: false };
        this.dialogRef.close(data);
      }
      this.loading = false;
    });
  }

  cancel() {
    const data: DialogCloseData = { canceled: true };
    this.dialogRef.close(data);
  }
}
