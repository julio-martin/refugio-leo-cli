import { Component, OnInit } from '@angular/core';

import { ContactInfo }    from './contact-info';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomValidators} from './custom.validator';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{

  contactForm : FormGroup;
  submitted = false;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: ContactInfo, valid: boolean }) {
    this.submitted = true;
    console.log(value, valid);
  }
}