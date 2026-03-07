import { Component, OnInit } from '@angular/core';
import { CreateMakeForm } from "../../components/make/create-make/create-make-form/create-make-form";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MakeService } from '../../services/make/make.service';
import { ICreateMakeRequestBody } from '../../Interfaces/Make';
import { ICountry } from '../../Interfaces/Location';
import { LocationService } from '../../services/location/location.service';
import { IFileData } from '../../Interfaces/shared';

@Component({
  selector: 'app-create-makes-component',
  imports: [CreateMakeForm, FormsModule, ReactiveFormsModule],
  templateUrl: './create-makes-component.html',
  styleUrl: './create-makes-component.scss',
})
export class CreateMakesComponent implements OnInit{

  constructor(private _MakeService:MakeService, private readonly _LocationService:LocationService) {

    
  }
  
  createMakeForm = new FormGroup({
    makeName: new FormControl("", {nonNullable:true}),
    origin:new FormControl("", {nonNullable:true}),
    company:new FormControl("", {nonNullable:true}),
    yearFounded:new FormControl("", {nonNullable:true}),
    makeAbbreviation:new FormControl("", {nonNullable:true}),
    makeLogo:new FormControl<IFileData>({name:'', type:"", lastModified:0, size:0}, {nonNullable:true})
  })


  countries:ICountry[] = [];
  makeLogoFileData!:File;
  
  ngOnInit(): void {
    this.getCountries();    
  }

    getCountries() {
    this._LocationService.getCountries()
        .subscribe(data=>{
          if(data){
            this.countries = data;
          }
        })
  }

  submitForm(){
    const form = this.createMakeForm.getRawValue();

    const requestBody:ICreateMakeRequestBody = {
      makeName: form.makeName,
      origin: form.origin,
      company: form.company,
      makeAbbreviation: form.makeAbbreviation,
      yearFounded: +form.yearFounded,
      makeLogo: {
        lastModified: form.makeLogo.lastModified,
        name: form.makeLogo.name,
        size: form.makeLogo.size,
        type: form.makeLogo.type
      }
    }
    this._MakeService.postMake(requestBody).subscribe({
      complete:()=>{
        this.createMakeForm.reset();
        alert("Done")
      }
    })
  }

  onChangeMakeLogo(file:File){
    this.makeLogoFileData = file;
    this.createMakeForm.patchValue({
      makeLogo:{
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type
      }
    })
  }
}
