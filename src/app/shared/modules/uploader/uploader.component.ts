import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  // @Input() control: FormControl;
  @ViewChild('imgFileInput', { read: ElementRef, static: false }) imgFileInput: ElementRef;
  @Output() fileChange = new EventEmitter();
  @Input() image: any;
  @Input() acceptedFile = null;
  @Input() title = '';

  constructor(private notifService: NotificationService) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const selectedFile = event.target.files[0];
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    const reader = new FileReader();
    const that = this;

    if (!this.acceptedFile.split(',').find(x => x.includes(fileExtension))) {
      this.notifService.error(`تنها فایل‌های با پسوندهای ${this.acceptedFile} مجاز هستند.`);
    } else {
      reader.onload = function (e: any) {
        that.image = e.target.result;
        that.fileChange.emit(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  cancel() {
    this.image = null;

    /**
    * actually reset imgFileInput
    */
    this.imgFileInput.nativeElement.value = '';
  }
}
