import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ServiceService  } from '../../user/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, 
    private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.formModel.reset();
  }
  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Phone:['',[Validators.required,Validators.minLength(10)]],
    CurrentAddress:this.fb.group({
      
      AddressLine1:['',Validators.required],
      AddressLine2:['',Validators.required],
      City:['',Validators.required],
      Zip:['',[Validators.required,Validators.minLength(6)]],
      State:['',Validators.required],
      Country:['',Validators.required]
    })
  })

  OnSubmit()
  {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Phone: this.formModel.value.Phone,
      AddressLine1: this.formModel.value.CurrentAddress.AddressLine1,
      AddressLine2: this.formModel.value.CurrentAddress.AddressLine2,
      Zip: this.formModel.value.CurrentAddress.Zip,
      City: this.formModel.value.CurrentAddress.City,
      State: this.formModel.value.CurrentAddress.State,
      Country: this.formModel.value.CurrentAddress.Country     
    };
    this.router.navigate(['parent/home'])
    return this.service.register(body);

    
  }
}
