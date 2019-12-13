import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee.component';
import { MatDialogModule } from '@angular/material';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbDialogConfig } from '@nebular/theme';
import { UploaderModule } from '../uploader/uploader.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    MatDialogModule,
    NbInputModule,
    UploaderModule,
    ReactiveFormsModule,
    FormsModule,
    NbSpinnerModule
  ],
  exports: [
    AddEmployeeComponent
  ],
  entryComponents: [AddEmployeeComponent]
})
export class AddEmployeeModule { }
