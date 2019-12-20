import { Component, OnInit, Input, Inject } from '@angular/core';
import { NbDialogRef, NbDialogConfig, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/shared/services/file.service';
import { File } from 'src/app/shared/models/file.model';
import { ManipulationMode } from 'src/app/shared/enums/manipulation-mode.enum';
import { DialogCloseData } from 'src/app/shared/models/dialog-close-data.model';

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
  constructor(
    private fileService: FileService,
    public dialogRef: MatDialogRef<AddFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  file: File = new File();

  ngOnInit() {
    if (this.data) {
      this.mode = ManipulationMode.update;
      this.fileService.getById(this.data.id).subscribe(result => {
        this.file = result;
      });
    }
  }

  save() {
    this.loading = true;
    this.mode === ManipulationMode.update ? this.update() : this.add();
  }

  add() {
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
