import { Component, OnInit, Input } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { ContactInfo }    from './contact-info';
import {CustomValidators} from './custom.validator';

import { IDog } from './dogs/dog';
import { Data } from "./data";

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  @Input() dog : string;
  contactForm : FormGroup;
  submitted = false;
  failed = false;
  subject : string;
  message : string;

  constructor(private _data: Data, private _fb: FormBuilder, private _translate: TranslateService, private _http:Http){
  
  }

  ngOnInit() {
    this.dog = this._data.storage;
    if(this.dog) {
        this._translate.get('CONTACTFORM.SUBJECT.POPULATED', {value: this.dog}).subscribe((res: string) => {
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
    let body = JSON.stringify(value);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept':'application/json' });
    let options = new RequestOptions({ headers: headers });
    this._http.post('https://formspree.io/contacto@elrefugiodeleo.com', body, options).subscribe(result => {
        if(result.ok) {
           this.submitted = true;
        } else {
          this.failed = true;
        }
    });
  }
}