import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { 
    path: 'passenger',
    canActivate: [AuthGuard],
    loadChildren: './passenger/passenger-routing.module#PassengerRoutingModule'
  },
  { 
    path: 'driver',
    canActivate: [AuthGuard],
    loadChildren: './driver/driver-routing.module#DriverRoutingModule'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
