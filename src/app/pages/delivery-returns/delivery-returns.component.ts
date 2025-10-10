import { Component } from '@angular/core';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';

@Component({
  selector: 'app-delivery-returns',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './delivery-returns.component.html',
  styleUrls: ['./delivery-returns.component.scss']
})
export class DeliveryReturnsComponent {}
