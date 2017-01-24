import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DogModule } from './dogs/dog.module';
import { DogListComponent } from './dogs/dog-list.component';
import { DonateComponent} from './donate.component';
import { AboutUsComponent} from './about-us.component';
import { ContactComponent} from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DonateComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'colabora', component: DonateComponent },
      { path: 'nosotros', component: AboutUsComponent },
      { path: 'contacto', component: ContactComponent },
      { path: '', component: DogListComponent }
    ]),
    DogModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
