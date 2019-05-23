import { Component, OnInit } from '@angular/core';
import { MapServiceService  } from '../services/map-service.service'
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  // lat: string = " ";
  // lng: string = " ";
  // city: string = " ";
  // mainLocation : Object;
s


  // // lat: number = 12.9677;
  // // lng: number = 77.65373;
  // zoom: number = 18;
  // location: any;
  // name;
  // ap1;


  // constructor(private map: MapServiceService) { }

  // ngOnInit() {


  //    this.map.getMainLatLng().subscribe((data)=>{
  //      this.lat=data.latitude;
  //      this.lng=data.longitude;
  //      this.city=data.city;

  //      this.mainLocation=data;
  //      console.log(data);
       


  //      this.map.getApi().subscribe(result => {
  //       const api1 = result.response.groups.map(res => res.items)
  //       this.location = api1.map(res => res.map(res1 => res1.venue.location ))[0];
  //       this.name = api1.map(res => res.map(res1 => res1.venue.name ))[0];
  //     })
  //    })


  // }
  // getLocation(value){
  //   let i = 0;
  //    for(let loc of this.location){  
  //      if(value === loc.lat){
  //          console.log(this.name[i]);
  //       }
  //      i++;
  //    }
  // }
  title: string = 'My first AGM project';
  lat: number;
  lng: number;
  zoom: number = 18;
  location: any;
  locationnames: any;
  ap1;
  
  nameOfRes:any;
  
  constructor(private map: MapServiceService){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.map.getApi(this.lat, this.lng).subscribe(result => {
          const api1 = result.response.groups.map(res => res.items)
          this.location = api1.map(res => res.map(res1 => res1.venue.location ))[0];
          this.locationnames = api1.map(res => res.map(res1 => res1.venue))[0];
    // console.log(this.locationnames)
    console.log(this.locationnames)
  // this.nameOfRes=[Object.assign({},this.name)]
  // console.log(  this.nameOfRes)

          
        })
      });
    }
  }

  ngOnInit(){
   
  }

  getLocation(lat){
    let i = 0;
    //  for(let loc of this.location){  
    //    if(lat == loc.lat){
    //        console.log(this.locationnames[i]);
    //            this.nameOfRes=this.locationnames[i]
    //     }
    //    i++;
    //  }
    console.log(lat);
    
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
