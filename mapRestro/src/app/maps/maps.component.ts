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
  name;
  ap1;
  // locationDesc={
  //   name:'',
  //   desc:'',
  //   lat:'',
  //   lng:''
  // }
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
          this.name = api1.map(res => res.map(res1 => res1.venue.name ))[0];
        })
      });
    }
  }

  ngOnInit(){
   
  }

  getLocation(lat){
    let i = 0;
     for(let loc of this.location){  
       if(lat == loc.lat){
           console.log(this.name[i]);
               this.nameOfRes=this.name[i]
        }
       i++;
     }
  }

}
