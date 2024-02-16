import {bootstrapApplication} from '@angular/platform-browser';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {AppComponent} from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(MatNativeDateModule, NgxMatNativeDateModule, NgxMatDatetimePickerModule),
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    provideAnimations(),
    provideHttpClient(),
  ]
}).catch(err => console.error(err));
