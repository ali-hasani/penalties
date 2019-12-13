import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

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

  dialogConfig: MatDialogConfig = {

  };

  ngOnInit() {
    this.employeeSerivce.getAll().subscribe(result => {
      this.employees = result;
    });
  }

  editEmployee(employeeId: string) {
    this.dialogConfig.data = { id: employeeId };
    const dialogRef = this.dialog.open(AddEmployeeComponent, this.dialogConfig).afterClosed().subscribe(result => {
    });
  }
}
