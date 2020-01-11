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
  ngOnInit() {
    this.bodyProfile=this.service.getBody();
    console.log('lol profile home')
    console.log(JSON.stringify(this.bodyProfile))
  }

  

}
