import { Component } from '@angular/core';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
     imports: [ NavbarComponent, FooterComponent],
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent {}

