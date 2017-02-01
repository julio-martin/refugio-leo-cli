import { Component, OnInit, Input } from '@angular/core';

import { ContactInfo }    from './contact-info';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomValidators} from './custom.validator';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  @Input() dog : string;
  contactForm : FormGroup;
  submitted = false;


  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      phone: ['', Validators.required],
      subject: [(this.dog ? 'Quiero adoptar!' : ''), Validators.required],
    message: [(this.dog ? 'Hola! Quiero adoptar a ' + this.dog 
      + '. Podéis poneros en contacto conmigo? Gracias!': ''), Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: ContactInfo, valid: boolean }) {
    this.submitted = true;
  }
}