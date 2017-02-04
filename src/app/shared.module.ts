import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { HttpModule, Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
      provide: TranslateLoader,
    useFactory: (createTranslateLoader),
            deps: [Http]
    }),
    ],
    exports: [
        TranslateModule
    ]
})
export class SharedModule { }