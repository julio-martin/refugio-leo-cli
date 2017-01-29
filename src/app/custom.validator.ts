import {FormControl} from '@angular/forms';

export class CustomValidators {

    static emailValidator(control: FormControl) {
        if (!control.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {

            return { 'invalidEmailAddress': true };
        } else {
            return null;
        }
    }
}