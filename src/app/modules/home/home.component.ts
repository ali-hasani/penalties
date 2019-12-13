import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddEmployeeComponent } from '../../shared/modules/add-employee/add-employee.component';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private employeeSerivce: EmployeeService) { }

  employees: Employee[] = [];
  noEmployees = false;

  files: any[] = [];

  dialogConfig: MatDialogConfig = {
    panelClass: 'custom-dialog',
    hasBackdrop: true,
    disableClose: true
  };

  ngOnInit() {
    this.getAllEmployees();
  }

  /**
  * Employee
  */

  getAllEmployees() {
    this.employeeSerivce.getAll().subscribe(result => {
      this.employees = result;
      this.noEmployees = result.length === 0;
    });
  }

  addEmployee() {
    this.dialogConfig.data = null;
    this.dialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddEmployeeComponent, this.dialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllEmployees();
      }
    });
  }

  editEmployee(employeeId: string) {
    this.dialogConfig.data = { id: employeeId };
    this.dialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddEmployeeComponent, this.dialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllEmployees();
      }
    });
  }

  /**
  * File
  */

  addFile() {

  }
}
