import { Routes, RouterModule } from '@angular/router';
import { DonateComponent} from './donate.component';
import { AboutUsComponent} from './about-us.component';
import { ContactComponent} from './contact.component';
import { HomeComponent} from './home.component';
import { NotFoundComponent} from './notfound.component';
import { DogListComponent } from './dogs/dog-list.component';

// Route config let's you map routes to components
const routes: Routes = [
    { path: 'colabora', component: DonateComponent },
      { path: 'nosotros', component: AboutUsComponent },
      { path: 'contacto', component: ContactComponent },
      { path: 'dogs', component: DogListComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
];


// - Updated Export
export const routing = RouterModule.forRoot(routes);