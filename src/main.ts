import {bootstrapApplication} from '@angular/platform-browser';
import {MAT_DATE_FORMATS, MatNativeDateModule} from '@angular/material/core';
import {AppComponent} from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {NGX_MAT_DATE_FORMATS, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {CUSTOM_MAT_DATE_FORMATS, CUSTOM_MAT_DATE_TIME_FORMATS} from "./app/formats";


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule, NgxMatNativeDateModule),
    {provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MAT_DATE_TIME_FORMATS},
    {provide: MAT_DATE_FORMATS, useValue: CUSTOM_MAT_DATE_FORMATS}
  ]
}).catch(err => console.error(err));
