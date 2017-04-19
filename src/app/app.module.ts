import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdIcon} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DogModule } from './dogs/dog.module';
import { DogListComponent } from './dogs/dog-list.component';
import {DogDetailComponent} from './dogs/dog-detail.component';
import { DonateComponent} from './donate.component';
import { AboutUsComponent} from './about-us.component';
import { ContactComponent} from './contact.component';
import { HomeComponent} from './home.component';
import { NotFoundComponent} from './notfound.component';
import { ContactFormComponent} from './contact-form.component';
import { SharedModule} from './shared.module';
import {routing} from './app.routes';
import { Data } from "./data";

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    CarouselModule.forRoot(),
    FlexLayoutModule.forRoot(),
    routing,
    DogModule,
    MaterialModule.forRoot()
  ],
  exports:[
        ContactComponent
    ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
