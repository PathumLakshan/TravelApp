import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'tripconfirm', loadChildren: './public/tripconfirm/tripconfirm.module#TripconfirmPageModule' },
  { path: 'home', loadChildren: './public/home/home.module#HomePageModule'},
  { path: 'regdriver', loadChildren: './public/register/regdriver/regdriver.module#RegdriverPageModule' },
  { path: 'regpassenger', loadChildren: './public/register/regpassenger/regpassenger.module#RegpassengerPageModule' },
  { path: 'imageupload', loadChildren: './public/imageupload/imageupload.module#ImageuploadPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
