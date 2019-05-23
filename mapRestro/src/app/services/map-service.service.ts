import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Location{
  latitude;
  longitude;
 
  response: any;

}


@Injectable({
  providedIn: 'root'
})
export class MapServiceService  {

   
  startingLatLng: any;
  onLoadLatLng={
    lat1:'',
    lng1: ''
  }
  constructor(private http : HttpClient) { }


 


  getApi(lat ,lng){
    return this.http.get<Location>('https://api.foursquare.com/v2/venues/explore?ll='+lat+','+lng+'&v=20181106&limit=20&radius=500&section=food&client_id=ERXASQWJPXQZGFA5PUBVB3FR03K012B0ADMYRAJP4VPLBBDE&client_secret=QL0WDHGJLQVZZDFWIYFV15NGV5C3KJUWXOLVK5AAX3D1DR3J')
  
}



}
