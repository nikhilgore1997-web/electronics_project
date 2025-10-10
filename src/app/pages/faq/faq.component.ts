import { Component } from '@angular/core';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-faq',
  standalone: true,
    imports: [ NavbarComponent, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {}
