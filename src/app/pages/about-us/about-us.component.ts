import { Component } from '@angular/core';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
   imports: [ NavbarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {}
