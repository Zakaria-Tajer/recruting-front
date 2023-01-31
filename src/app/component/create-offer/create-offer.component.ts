import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginResponse} from "../../interfaces/LoginResponse";
import {CreateOfferService} from "../../service/create-offer.service";
import {OfferResponse} from "../../interfaces/OfferResponse";
import {LoginDataObsService} from "../../service/login-data-obs.service";
import { UserData } from 'src/app/interfaces/UserData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  sideNavStatus: boolean = false;
  title = "Add Offer";

  constructor(private offerService: CreateOfferService, private loginData: LoginDataObsService) {
  }

  form = new FormGroup({
    offerTitle: new FormControl(
      '', [Validators.required]
    ),
    profile: new FormControl(
      '', [Validators.required]
    ),
    description: new FormControl(
      '', [Validators.minLength(40), Validators.required]
    ),
    city: new FormControl(
      '', [Validators.required]
    ),
    educationLevel: new FormControl(
      '', [Validators.required]
    ),
    salary: new FormControl(
      '', [Validators.required]
    ),
  })

  ngOnInit() {

    const offerTitle = this.form.get('offerTitle');
    const profile = this.form.get('profile');
    const description = this.form.get('description');
    const city = this.form.get('city');
    const educationLevel = this.form.get('educationLevel');
    const salary = this.form.get('salary');

    offerTitle?.valueChanges.subscribe(x => {
      this.validateInputs();
    })
    profile?.valueChanges.subscribe(x => {
      this.validateInputs();
    })
    description?.valueChanges.subscribe(x => {
      this.validateInputs();
    })
    city?.valueChanges.subscribe(x => {
      this.validateInputs();
    })
    educationLevel?.valueChanges.subscribe(x => {
      this.validateInputs();
    })
    salary?.valueChanges.subscribe(x => {
      this.validateInputs();
    })


  }

  profiles = [
    {id: 1, profileName: "Marketing Coordinator"},
    {id: 2, profileName: "Medical Assistant"},
    {id: 3, profileName: "Web Designer"},
    {id: 4, profileName: "President of Sales"},
    {id: 5, profileName: "Nursing Assistant"},
    {id: 6, profileName: "Project Manager"},
    {id: 7, profileName: "Computer Scientist"},
    {id: 8, profileName: "Web Designer"},
    {id: 9, profileName: "DevOps Engineer"},
    {id: 10, profileName: "IT Manager"},
    {id: 11, profileName: "Cloud Architect"},
  ];

  educationLevel = [
    {id: 1, level: "Bac"},
    {id: 2, level: "Bac + 2"},
    {id: 3, level: "Bac + 3"},
    {id: 4, level: "Bac + 5"},
    {id: 5, level: "self-learner"},

  ];

  onCreate(): void {
    let {offerTitle, profile, educationLevel, description, city, salary } = this.form.value;

      this.loginData.userData.subscribe((data: UserData) => {
        let formDetails = {
          offreName: offerTitle,
          description: description,
          profilSearching: profile,
          city: city,
          educationLevel: educationLevel,
          salary: salary,
          status: "UNPUBLISHED",
          email: data.email
        }
        console.log(data.email , formDetails)
        this.offerService.create(formDetails).subscribe((offerData: OfferResponse) => {
            console.log(offerData)
          
          })
      
      });
      


  }


  private validateInputs(): void {
    if (
      this.form.controls.offerTitle.hasError('required')
      ||
      this.form.controls.profile.hasError('required')
      ||
      this.form.controls.city.hasError('required')
      ||
      this.form.controls.description.hasError('required')
      ||
      this.form.controls.educationLevel.hasError('required')

    ) {
      this.form.setErrors({incorrect: true, message: 'All Fields are Required'})
    }

  }


}
