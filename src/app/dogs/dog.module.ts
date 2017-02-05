import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule} from '../shared.module';
import {DogListComponent} from './dog-list.component';
import {DogDetailComponent} from './dog-detail.component';
import { DogService } from './dog.service';
import { ContactComponent} from '../contact.component';

@NgModule({
  declarations: [ 
        DogListComponent,
        DogDetailComponent
        ],
    imports: [
        BrowserModule,
        SharedModule,
        FlexLayoutModule.forRoot(),
        CarouselModule.forRoot(),
            MaterialModule.forRoot(),
             RouterModule.forChild([
            {path: 'dogs', component: DogListComponent},
            {path:'dog/:name', 
                component: DogDetailComponent},
                {path:'contacto/:dog', 
                component: ContactComponent},
        ])
        ],
    exports:[
        DogListComponent
    ],
    providers: [
    ]
})
export class DogModule {}