import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFileComponent } from './add-file.component';
import { MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { NbCardModule, NbButtonModule, NbInputModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
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
    NbIconModule
  ],
  exports: [
    AddFileComponent
  ],
  entryComponents: [AddFileComponent]
})
export class AddFileModule { }
