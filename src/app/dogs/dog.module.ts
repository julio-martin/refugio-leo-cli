import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import {DogListComponent} from './dog-list.component';
import {DogDetailComponent} from './dog-detail.component';
import { DogService } from './dog.service';

@NgModule({
  declarations: [ 
        DogListComponent,
        DogDetailComponent 
        ],
    imports: [
        BrowserModule,
        CarouselModule.forRoot(),
            MaterialModule.forRoot(),
             RouterModule.forChild([
            {path: 'dogs', component: DogListComponent},
            {path:'dog/:name', 
                component: DogDetailComponent},
        ])
        ],
    exports:[
        DogListComponent
    ],
    providers: [
    ]
})
export class DogModule {}