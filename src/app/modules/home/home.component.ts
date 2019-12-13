import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  editUser(id: string) {
    const dialogRef  = this.dialogService.open(AddEmployeeComponent).onClose.subscribe(result => {
    });
  }
}
