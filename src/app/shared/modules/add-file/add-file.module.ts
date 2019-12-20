import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFileComponent } from './add-file.component';
import { MatDialogModule } from '@angular/material';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { UploaderModule } from '../uploader/uploader.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddFileComponent],
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
    AddFileComponent
  ],
  entryComponents: [AddFileComponent]
})
export class AddFileModule { }
