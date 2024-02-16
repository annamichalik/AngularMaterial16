import {bootstrapApplication} from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import {AppComponent} from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";


bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule)
  ]
}).catch(err => console.error(err));
