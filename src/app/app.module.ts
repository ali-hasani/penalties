import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDialogModule, NbDialogConfig, NbCardModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptor/interceptor';
import { MatDialogModule } from '@angular/material/dialog';

const dialogConfig: NbDialogConfig = new NbDialogConfig({
  autoFocus: true,
  backdropClass: 'dialog-backdrop',
  closeOnBackdropClick: false,
  closeOnEsc: true,
  hasBackdrop: true,
  dialogClass: 'add-employee-dialog'
});
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbEvaIconsModule,
    FontAwesomeModule,
    NbLayoutModule,
    NbDialogModule.forRoot(dialogConfig),
    NbCardModule,
    NbButtonModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeComponent]
})
export class AppModule { }
