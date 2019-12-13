import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(
    private notificationService: NotificationService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.subscription = this.notificationService.getMessage().subscribe(message => {
      this.message = message;
      if (this.message) {
        if (this.message.text) {
          if (this.message.text.body) {
            if (this.message.text.body.message) {
              if (this.message.type === 'error') {
                this.snackBar.open(this.message.text.body.message, '', {
                  duration: 5000,
                  panelClass: ['danger-snackbar'],
                  horizontalPosition: 'center',
                  verticalPosition: 'top'
                });
              }
              if (this.message.type === 'success') {
                this.snackBar.open(this.message.text.body.message, '', {
                  duration: 50000,
                  panelClass: ['success-snackbar'],
                  horizontalPosition: 'center',
                  verticalPosition: 'top'
                });
              }
            }
          } else {
            if (this.message.type === 'error') {
              this.snackBar.open(this.message.text, '', {
                duration: 5000,
                panelClass: ['danger-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }
            if (this.message.type === 'success') {
              this.snackBar.open(this.message.text, '', {
                duration: 5000,
                panelClass: ['success-snackbar'],
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
