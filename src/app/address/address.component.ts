import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;
  constructor(private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      address: this.fb.array([]) 
    });

    this.addAddress();
    console.log(this.addressForm);

  }

  get address(): FormArray {
    return this.addressForm.get("address") as FormArray;
  }

  newAddress(): FormGroup {
    return this.fb.group({
      address : ['',Validators.required],
      pincode: ['',Validators.required],
      landmark:['',Validators.required]
    })
  }
 
  addAddress() {
    console.log(this.address);
    if(this.address.controls.length<5)
    this.address.push(this.newAddress());
    console.log(this.address.controls);
  }

​ removeAddress(i){
  this.address.removeAt(i);
  }  
  onSubmit(){
    if(this.addressForm.status=='VALID')
    localStorage.setItem('address',JSON.stringify(this.addressForm.value.address))
    console.log(this.addressForm,this.addressForm.value.address);

  } 


}
