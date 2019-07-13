import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'setjourneyplan', loadChildren: './setjourneyplan/setjourneyplan.module#SetjourneyplanPageModule' },
  { path: 'driverselection', loadChildren: './driverselection/driverselection.module#DriverselectionPageModule' },
  { path: 'driverfeedback', loadChildren: './driverfeedback/driverfeedback.module#DriverfeedbackPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }
