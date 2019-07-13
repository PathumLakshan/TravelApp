import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'journeyplan', loadChildren: './driver/journeyplan/journeyplan.module#JourneyplanPageModule' },
  { path: 'psngrfeedback', loadChildren: './driver/psngrfeedback/psngrfeedback.module#PsngrfeedbackPageModule' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
