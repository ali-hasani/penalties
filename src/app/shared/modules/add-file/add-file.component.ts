import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/shared/services/file.service';
import { File } from 'src/app/shared/models/file.model';
import { ManipulationMode } from 'src/app/shared/enums/manipulation-mode.enum';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { FormControl } from '@angular/forms';
import { startWith, debounceTime } from 'rxjs/operators';
import * as L from 'lodash';
import { Penalty } from '../../models/penalty.model';
import * as moment from 'moment';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent implements OnInit {
  acceptedFile = ".png,.jpg,.jpeg";
  title = 'تصویر کارمند';
  loading = false;
  mode: ManipulationMode = ManipulationMode.create;
  manipulationMode = ManipulationMode;

  employees: Employee[] = [];
  selectedEmployees: Employee[] = [];
  stateCtrl = new FormControl('');

  todayName = moment().locale('fa').format('dddd');
  // todayName = moment().locale('fa').subtract(3, 'days').format('dddd');

  constructor(
    private fileService: FileService,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<AddFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  file: File = new File();

  ngOnInit() {
    moment.locale('fa');

    this.stateCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(500)).subscribe((value) => {
        if (value) {
          this.employeeService.filterEmployees(value.trim(), L.flatMapDeep(this.file.penalties, p => p.employee._id)).subscribe(result => {
            if (result) {
              this.employees = result;
            }
          });
        }
      });

    if (this.data) {
      this.mode = ManipulationMode.update;
      this.fileService.getById(this.data.id).subscribe(result => {
        this.file = result;
      });
    }
  }

  addPenalty(event) {
    this.file.penalties.push({
      _id: null,
      value: 5000,
      paid: false,
      paymentDate: null,
      employee: this.employees.find(e => e._id === event.option.id)
    });

    this.employees = [];
  }

  removePenalty(id: string) {
    L.remove(this.file.penalties, (p: Penalty) => p.employee._id === id);
  }

  save() {
    this.loading = true;
    this.mode === ManipulationMode.update ? this.update() : this.add();
  }

  add() {
    this.file.date = moment().locale('fa').format('YYYY-MM-DDTh:mm:ss');
    // this.file.date = moment().locale('fa').subtract(3, 'days').format('YYYY-MM-DDTh:mm:ss');
    this.fileService.add(this.file).subscribe(result => {
      if (result) {
        const data: DialogCloseData = { canceled: false };
        this.dialogRef.close(data);
      }
      this.loading = false;
    });
  }

  update() {
    this.fileService.update(this.file).subscribe(result => {
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
