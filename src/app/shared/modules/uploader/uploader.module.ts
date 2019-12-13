import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [UploaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    UploaderComponent
  ]
})
export class UploaderModule { }
