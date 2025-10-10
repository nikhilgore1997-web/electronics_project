import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
    imports: [ NavbarComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {}

