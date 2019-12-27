import { Component, OnInit } from '@angular/core';
import { AddEmployeeComponent } from '../../shared/modules/add-employee/add-employee.component';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';
import { FileService } from 'src/app/shared/services/file.service';
import { File } from 'src/app/shared/models/file.model';
import { AddFileComponent } from 'src/app/shared/modules/add-file/add-file.component';
import { StatisticsService } from 'src/app/shared/services/statistics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private employeeSerivce: EmployeeService,
    private fileSerivce: FileService,
    private statisticsService: StatisticsService) { }

  employees: Employee[] = [];
  noEmployees = false;

  files: File[] = [];
  noFiles = false;

  dialogConfig: MatDialogConfig = {
    panelClass: 'custom-dialog',
    hasBackdrop: true,
    disableClose: true
  };

  addFileDialogConfig: MatDialogConfig = {
    panelClass: 'add-file-dialog',
    hasBackdrop: true,
    disableClose: true
  };

  /**
  * Statistics
  */
  allPaidPenalties;
  allDeptToFund;

  ngOnInit() {
    this.getAllEmployees();
    this.getAllFiles();
    this.getAllStatistics();
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
    this.addFileDialogConfig.data = null;
    this.addFileDialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddFileComponent, this.addFileDialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllFiles();
        this.getAllStatistics();
      }
    });
  }

  editFile(fileId: string) {
    this.addFileDialogConfig.data = { id: fileId };
    this.addFileDialogConfig.direction = 'rtl';
    const dialogRef = this.dialog.open(AddFileComponent, this.addFileDialogConfig).afterClosed().subscribe((result: DialogCloseData) => {
      if (!result.canceled) {
        this.getAllFiles();
        this.getAllStatistics();
      }
    });
  }

  /**
  * Statistics
  */

  getAllStatistics() {
    this.totallPaindAmount();
    this.totallDeptToFund();
  }

  totallPaindAmount() {
    this.statisticsService.totallPaindAmount().subscribe(result => {
      this.allPaidPenalties = result;
    });
  }

  totallDeptToFund() {
    this.statisticsService.totallDeptToFund().subscribe(result => {
      this.allDeptToFund = result;
    });
  }
}
