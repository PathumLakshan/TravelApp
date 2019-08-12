import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'tripconfirm', loadChildren: './public/tripconfirm/tripconfirm.module#TripconfirmPageModule' },
  { path: '', loadChildren: './public/home/home.module#HomePageModule'},
  { path: 'imageupload', loadChildren: './public/imageupload/imageupload.module#ImageuploadPageModule' },
  { path: 'maps-geo', loadChildren: './public/maps-geo/maps-geo.module#MapsGeoPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
