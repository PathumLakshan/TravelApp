import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PsngrfeedbackPage } from './psngrfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: PsngrfeedbackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PsngrfeedbackPage]
})
export class PsngrfeedbackPageModule {}
