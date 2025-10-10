import { Component } from '@angular/core';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {}
