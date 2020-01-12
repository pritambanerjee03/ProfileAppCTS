import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ServiceService  } from '../../user/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  states: Array<String> = ['AB', 'CD', 'EF', 'GH','IJ'];
  formModel:FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, 
    private service:ServiceService, private router:Router) { }

  ngOnInit() {
    // this.formModel.reset();
    this.formModel=this.fb.group({
      UserName:['',[Validators.required, Validators.minLength(5)]],
      Email:['',[Validators.required,Validators.email]],
      Phone:['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Addresses:this.fb.array([
        this.addAddressFormGroup()
      ])
    })
  }

  
  addAddressFormGroup() : FormGroup{
    return this.fb.group({
      //primaryFlg: [],
      AddressLine:['',Validators.required],
      City:['',Validators.required],
      Zip:['',[Validators.required, Validators.pattern('^[0-9]{6}$')]],
      State:['',Validators.required],
      Country:['India',Validators.required]
    });
  }

  addAddress() {
    this.addressArray.push(this.addAddressFormGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  get addressArray() {
    return <FormArray>this.formModel.get('Addresses');
  }

  OnSubmit()
  {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Phone: this.formModel.value.Phone,
      Addresses: this.formModel.value.Addresses
      // Zip: this.formModel.value.Address[0].Zip,
      // City: this.formModel.value.Address[0].City,
      // State: this.formModel.value.Address[0].State,
      // Country: this.formModel.value.Address[0].Country     
    };
    this.router.navigate(['parent/home'])
    return this.service.register(body);
  }

  submitHandler() {
      console.log({...this.formModel.value});
  }
    
}
