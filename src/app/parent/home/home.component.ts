import { Component, OnInit } from '@angular/core';
import { ServiceService  } from '../../user/service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:ServiceService) { }

  bodyProfile:any;
  groups:any=[]
  ngOnInit() {
    this.bodyProfile=this.service.getBody();
    console.log('lol profile home')
    console.log(JSON.stringify(this.bodyProfile))
    this.groups =this.bodyProfile.Addresses
    console.log('lol profile home groups')
    console.log(JSON.stringify(this.groups))
  }

  

}
