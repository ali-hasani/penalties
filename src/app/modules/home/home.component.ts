import { Component, OnInit } from '@angular/core';
import { AddEmployeeComponent } from '../../shared/modules/add-employee/add-employee.component';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';
import { FileService } from 'src/app/shared/services/file.service';
import { File } from 'src/app/shared/models/file.model';
import { AddFileComponent } from 'src/app/shared/modules/add-file/add-file.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private employeeSerivce: EmployeeService,
    private fileSerivce: FileService) { }

  employees: Employee[] = [];
  noEmployees = false;

  files: File[] = [];
  noFiles = false;

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

  getAllFiles() {
    this.fileSerivce.getAll().subscribe(result => {
      this.files = result;
      this.noFiles = result.length === 0;
    });
  }

  addFile() {
    this.dialogConfig.data = null;
    this.dialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddFileComponent, this.dialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllFiles();
      }
    });
  }

  editFile(fileId: string) {
    this.dialogConfig.data = { id: fileId };
    this.dialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddFileComponent, this.dialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllFiles();
      }
    });
  }
}
