import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbLayoutModule, NbIconModule, NbDialogModule, NbDialogConfig } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FlexLayoutModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  entryComponents: [
  ]
})
export class HomeModule { }
