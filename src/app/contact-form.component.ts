import { Component, OnInit, Input } from '@angular/core';

import { ContactInfo }    from './contact-info';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomValidators} from './custom.validator';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  @Input() dog : string;
  contactForm : FormGroup;
  submitted = false;
  subject : string;
  message : string;

  constructor(private _fb: FormBuilder, private _translate: TranslateService) { }

  ngOnInit() {
    if(this.dog) {
        this._translate.get('CONTACTFORM.SUBJECT.POPULATED').subscribe((res: string) => {
          this.subject = res;
        });
        this._translate.get('CONTACTFORM.MESSAGE.POPULATED', {value: this.dog}).subscribe((res: string) => {
          this.message = res;
        });
    }
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, CustomValidators.emailValidator])],
      phone: ['', Validators.required],
      subject: [(this.dog ? this.subject : ''), Validators.required],
      message: [(this.dog ? this.message : ''), Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: ContactInfo, valid: boolean }) {
    this.submitted = true;
  }
}