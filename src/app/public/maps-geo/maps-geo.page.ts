// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { NavController, Platform } from '@ionic/angular';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { SubscriptionLike } from 'rxjs/Subscription';
// import { filter } from 'rxjs/operators';
// import { Storage } from '@ionic/storage';

// declare const google;

// @Component({
//   selector: 'app-maps-geo',
//   templateUrl: './maps-geo.page.html',
//   styleUrls: ['./maps-geo.page.scss'],
// })
// export class MapsGeoPage {

//   @ViewChild('map') mapElement: ElementRef;
//   map: any;
//   currentMapTrack = null;
 
//   isTracking = false;
//   trackedRoute = [];
//   previousTracks = [];
 
//   positionSubscription: SubscriptionLike;
 
//   constructor(public navCtrl: NavController, private plt: Platform,
//               private geolocation: Geolocation, private storage: Storage) { }
 
//   ionViewDidLoad() {
//     this.plt.ready().then(() => {
//       this.loadHistoricRoutes();
 
//       const mapOptions = {
//         zoom: 13,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         mapTypeControl: false,
//         streetViewControl: false,
//         fullscreenControl: false
//       }

//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
//       this.geolocation.getCurrentPosition()
//           .then(pos => {
//             const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
//             this.map.setCenter(latLng);
//             this.map.setZoom(16);
//           }).catch((error) => {
//             console.log('Error getting location', error);
//           });
//       });
//   }


//   loadHistoricRoutes() {
//     this.storage.get('routes').then(data => {
//       if (data) {
//         this.previousTracks = data;
//       }
//     });
//   }

//   startTracking() {
//     this.isTracking = true;
//     this.trackedRoute = [];
 
//     this.positionSubscription = this.geolocation.watchPosition()
//       .pipe(
//         filter((p) => p.coords !== undefined) // Filter Out Errors
//       )
//       .subscribe(data => {
//         setTimeout(() => {
//           this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
//           this.redrawPath(this.trackedRoute);
//         }, 0);
//       });
 
//   }
 
//   redrawPath(path) {
//     if (this.currentMapTrack) {
//       this.currentMapTrack.setMap(null);
//     }
 
//     if (path.length > 1) {
//       this.currentMapTrack = new google.maps.Polyline({
//         path: path,
//         geodesic: true,
//         strokeColor: '#ff00ff',
//         strokeOpacity: 1.0,
//         strokeWeight: 3
//       });
//       this.currentMapTrack.setMap(this.map);
//     }
//   }

//   stopTracking() {
//     const newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
//     this.previousTracks.push(newRoute);
//     this.storage.set('routes', this.previousTracks);

//     this.isTracking = false;
//     this.positionSubscription.unsubscribe();
//     this.currentMapTrack.setMap(null);
//   }

//   showHistoryRoute(route) {
//     this.redrawPath(route);
//   }
// }

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  LocationService,
  GoogleMapOptions
} from '@ionic-native/google-maps';

import { Platform, NavController } from '@ionic/angular';

declare let google;

@Component({
  selector: 'app-maps-geo',
  templateUrl: './maps-geo.page.html',
  styleUrls: ['./maps-geo.page.scss'],
})
export class MapsGeoPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: string;
  myLat: any;
  myLong: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public platform: Platform, 
    public nav: NavController) {
  }

  ngOnInit() {
    
  }

  currentPlace() {

    this.geolocation.getCurrentPosition().then((resp) => {

      this.myLat = resp.coords.latitude;
      this.myLong = resp.coords.longitude;
      this.platform.ready().then( () => {
        this.loadMap();
      });
      console.log(this.myLat);
      console.log(this.myLong);

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  loadMap() {
    const mapOptions: GoogleMapOptions = {
      controls: {
        myLocationButton: true
      },
    }

    const map = GoogleMaps.create( 'map', mapOptions );
    map.one( GoogleMapsEvent.MAP_READY )
    .then( ( data: any ) => {
      const coordinates: LatLng = new LatLng( this.myLat, this.myLong );

      const position = {
        target: coordinates,
        zoom: 14
      };
      map.animateCamera( position );
      const markerOptions: MarkerOptions = {
        position: coordinates,
        title: 'Hello California'
      };

      const marker = map.addMarker( markerOptions )
      .then( ( marker: Marker ) => {
        marker.showInfoWindow();
      });
    });
  }

  // loadMap() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     const mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     // this.map.addListener('tilesloaded', () => {
  //     //   console.log('accuracy',this.map);
  //     //   this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
  //     // });

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  // getAddressFromCoords(lattitude, longitude) {
  //   console.log("getAddressFromCoords "+lattitude+" "+longitude);
  //   const options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5
  //   };

  //   this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
  //     .then((result: NativeGeocoderReverseResult[]) => {
  //       this.address = "";
  //       const responseAddress = [];
  //       for (const [key, value] of Object.entries(result[0])) {
  //         if(value.length>0){
  //         responseAddress.push(value);}

  //       }
  //       responseAddress.reverse();
  //       for (let value of responseAddress) {
  //         this.address += value+", ";
  //       }
  //       this.address = this.address.slice(0, -2);
  //     })
  //     .catch((error: any) =>{ 
  //       this.address = "Address Not Available!";
  //     });

  // }

}
