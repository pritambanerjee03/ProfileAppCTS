import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  BodyReturn:any;

  register(body) {
    
    this.BodyReturn=body;
    console.log(JSON.stringify(this.BodyReturn))
  }

  getBody()
  {
    return this.BodyReturn;
  }
}
