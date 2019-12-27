import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFileComponent } from './add-file.component';
import { MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule, NbCheckboxModule } from '@nebular/theme';
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
    NbSpinnerModule,
    MatAutocompleteModule,
    NbIconModule,
    NbCheckboxModule
  ],
  exports: [
    AddFileComponent
  ],
  entryComponents: [AddFileComponent]
})
export class AddFileModule { }
