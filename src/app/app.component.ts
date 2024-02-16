import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {NGX_MAT_DATE_FORMATS, NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";
import {CUSTOM_MAT_DATE_TIME_FORMATS} from "./formats";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, NgxMatDatetimePickerModule],
  providers: [
    {provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MAT_DATE_TIME_FORMATS}
  ]
})
export class AppComponent {
  title = 'angular-material16';
}
