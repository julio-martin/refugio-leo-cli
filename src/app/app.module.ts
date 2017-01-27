import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { AppComponent } from './app.component';
import { DogModule } from './dogs/dog.module';
import { DogListComponent } from './dogs/dog-list.component';
import {DogDetailComponent} from './dogs/dog-detail.component';
import { DonateComponent} from './donate.component';
import { AboutUsComponent} from './about-us.component';
import { ContactComponent} from './contact.component';
import { HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot([
      { path: 'colabora', component: DonateComponent },
      { path: 'nosotros', component: AboutUsComponent },
      { path: 'contacto', component: ContactComponent },
      { path: 'dogs', component: DogListComponent },
      { path: '', component: HomeComponent }
    ]),
    DogModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
