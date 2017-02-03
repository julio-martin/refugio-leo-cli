import { Component,ChangeDetectionStrategy } from '@angular/core';

import {DogService} from './dogs/dog.service';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[
        DogService
    ]
})
export class AppComponent {

    languages: string[] = ["es", "en"];

    constructor(private translate: TranslateService) {
        translate.addLangs(this.languages);
        translate.setDefaultLang('es');

        let browserLang: string = this.translate.getBrowserLang();
        console.log("BROWSERLANG:" + browserLang);
        translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

    }

  public changeLanguage(translate: TranslateService, language : any) {
      console.log("SELECTED LANGUAGE:" + language);
      translate.use(language);
  }

 views: Object[] = [
   {
      name: "SIDENAV.MAIN.TITLE",
      description: "SIDENAV.MAIN.DESCRIPTION",
      icon: "pets",
      href: "/"
    },
   {
      name: "SIDENAV.DOGS.TITLE",
      description: "SIDENAV.DOGS.DESCRIPTION",
      icon: "pets",
      href: "dogs"
    },
    {
      name: "SIDENAV.ABOUTUS.TITLE",
      description: "SIDENAV.ABOUTUS.DESCRIPTION",
      icon: "pets",
      href: "nosotros"
    },
    {
      name: "SIDENAV.HELPUS.TITLE",
      description: "SIDENAV.HELPUS.DESCRIPTION",
      icon: "pets",
      href: "colabora"
    },
    {
      name: "SIDENAV.CONTACT.TITLE",
      description: "SIDENAV.CONTACT.DESCRIPTION",
      icon: "pets",
      href: "contacto"
    }
  ];
  headerLinks: Object[] = [
    {
      name: "HEADER.MAIN",
      href: "/"
    },
   {
      name: "HEADER.DOGS",
      href: "dogs"
    },
    {
      name: "HEADER.ABOUTUS",
      href: "nosotros"
    },
    {
      name: "HEADER.HELPUS",
      href: "colabora"
    },
    {
      name: "HEADER.CONTACT",
      href: "contacto"
    }
  ];
}
