import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FooterComponent } from '@app/footer/footer.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {}
