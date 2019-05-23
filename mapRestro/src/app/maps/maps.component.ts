/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader} from '@agm/core';

import { FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
 declare let google:any;



import { MapServiceService  } from '../services/map-service.service'



@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @ViewChild('search')
   public searchElementRef : ElementRef;
   public zoom: number=18;
   public latitude: number;
   public longitude: number;
   public latlongs: any = [];
   public latlong: any = {};
   public searchControl: FormControl;
   public placeID : String;
   public location: any;
   public name: any;
   public locationnames: any;

   mainLatlng: Object;
   

  constructor(private mapsAPILoader : MapsAPILoader, private ngZone: NgZone, private map: MapServiceService) { }

  ngOnInit() {
    this.zoom=18;
    this.latitude ;
    this.longitude;
    this.searchControl=new FormControl();
    this.setCurrentPosition() ;
    
    this.mapsAPILoader.load().then( () => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{
        types: [],
    
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run( () => {
          
          const place:google.maps.places.PlaceResult = autocomplete.getPlace();
          this.placeID = place.place_id;
          if(place.geometry === undefined || place.geometry === null){
            return;
          }
          const latlong={
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          };
          console.log(latlong)
          this.latlongs = [];
          this.latlongs.push(latlong);
          console.log(this.latlongs);
          
         
          this.setCurrentPosition()


        });
      });
    });
    
  }
 setCurrentPosition(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{

   if(this.latlongs.length == 0){
    this.latitude=position.coords.latitude;
    this.longitude=position.coords.longitude;
    console.log("==============>>>> in if");
    this.map.getApi(this.latitude, this.longitude).subscribe(result => {
      const api1 = result.response.groups.map(res => res.items)
      this.location = api1.map(res => res.map(res1 => res1.venue.location ))[0];
      this.locationnames = api1.map(res => res.map(res1 => res1.venue))[0];
// console.log(this.locationnames)
console.log(this.locationnames)
// this.nameOfRes=[Object.assign({},this.name)]
// console.log(  this.nameOfRes)

      
    })
    
   }
   else{
     console.log("======>>>>>>.....in else");
     
    //  this.latitude=this.latlongs[]
    console.log(this.latlongs,"==============================================>>>>>>>>>>>>>>>....");
    
      this.latlongs.map(element => {

        this.latitude=element.latitude;
        this.longitude=element.longitude;
        console.log(this.latitude,this.longitude);
       
        this.map.getApi(this.latitude, this.longitude).subscribe(result => {
          const api1 = result.response.groups.map(res => res.items)
          this.location = api1.map(res => res.map(res1 => res1.venue.location ))[0];
          this.locationnames = api1.map(res => res.map(res1 => res1.venue))[0];
    // console.log(this.locationnames)
    console.log(this.locationnames)
    // this.nameOfRes=[Object.assign({},this.name)]
    // console.log(  this.nameOfRes)
   
          
        });
      });
   }
       


        this.zoom=8;
      });
    }
  }

  circleOut(label) {
    // marker.fillColor = "#EC407A";
    console.log(label);
    
  }
  
  circleOver(label) {
    // marker.fillColor = "#ff0057";
    console.log(label);

  }

}
