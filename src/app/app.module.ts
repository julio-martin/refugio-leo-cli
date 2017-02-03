import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule, MdIcon} from '@angular/material';
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
import { ContactFormComponent} from './contact-form.component';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
    useFactory: (createTranslateLoader),
            deps: [Http]
    }),
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
  exports:[
        ContactComponent,
        TranslateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
