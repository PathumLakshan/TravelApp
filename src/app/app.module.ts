import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// firebase cloud messagin
// import { Firebase } from '@ionic-native/firebase';

// import { AngularFirestoreModule } from 'angularfire2/firestore';

// import { environment } from 'src/environments/environment';

// // firbase Auth
// import { GAuthenticateService } from '../app/services/g-auth/gauthentication.service';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import { FcmService } from './services/fcmService/fcm.service';
// import { Firebase } from '@ionic-native/firebase/ngx';
// import { AngularFireModule } from '@angular/fire';

// firebase.initializeApp(environment.firebase);

// const config = {
//   apiKey: 'AIzaSyDNlZ1hrGN_RJggCqMGjoQDxRzFVMBhwg4',
//   authDomain: 'travelapp-22107.firebaseapp.com',
//   databaseURL: 'https://travelapp-22107.firebaseio.com',
//   projectId: 'travelapp-22107',
//   storageBucket: '',
//   messagingSenderId:  50447491700,
//   appId: '1:50447491700:web:9b7f3defdcb3b9d2'
// };

export function jwtOptionFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:5000']
  }
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionFactory,
        deps: [Storage],
      }
    }),
    BrowserAnimationsModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(config)
  ],

  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    SQLite,
    SQLitePorter,
    Camera,
    File,
    WebView,
    FilePath,
    // Firebase,
    // FcmService,
    // GAuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
