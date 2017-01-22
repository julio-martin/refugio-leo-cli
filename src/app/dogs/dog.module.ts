import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import {DogListComponent} from './dog-list.component';

import { DogService } from './dog.service';

@NgModule({
  declarations: [ 
        DogListComponent 
        ],
    imports: [
        BrowserModule,
            MaterialModule.forRoot()
        ],
    exports:[
        DogListComponent
    ]
})
export class DogModule {}