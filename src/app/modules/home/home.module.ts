import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbLayoutModule, NbIconModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddEmployeeModule } from 'src/app/shared/modules/add-employee/add-employee.module';
import { AddFileModule } from 'src/app/shared/modules/add-file/add-file.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FlexLayoutModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbSpinnerModule,
    AddEmployeeModule,
    AddFileModule
  ],
  entryComponents: [
  ]
})
export class HomeModule { }
