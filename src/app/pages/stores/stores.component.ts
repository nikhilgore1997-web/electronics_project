import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores = [
    {
      name: 'MYstore',
      distance: '1.1 Km',
      address: 'MYstore, Juhu Ground Floor, Vasundhara Chs, Opp Utpal Shanghvi School, JVPD Scheme, Vile Parle West, Mumbai, 400049',
      phone: '8691088261'
    },
    {
      name: 'MYstore',
      distance: '2.5 Km',
      address: 'Shop No. 5,6 & 7 on Ground Floor & Shop No. 5A,6A & 7A on First Floor, The Gateway by Sunder Villa, Juhu Tara Road, Santacruz West, Mumbai, 400054',
      phone: '8691032578'
    },
    {
      name: 'MYstore',
      distance: '2.6 Km',
      address: 'Unit No. 15,16,17A-D, 18 & 19 on Ground Floor & Unit No. 18,18A &19A in Basement Floor, Kadamgiri Complex, Hanuman Road, Next to Gajalee Restaurant, Vile Parle (East), Mumbai, 400057',
      phone: '8691013011'
    },
    {
      name: 'MYstore',
      distance: '4 Km',
      address: 'Unit no - 2 & 3, Landmark Croma Showroom, OPP China Gate Restaurant, Andheri Link Road, Andheri West, Mumbai, 400053',
      phone: '8879682863'
    },
    {
      name: 'MYstore',
      distance: '4.4 Km',
      address: 'MYstore, Lower Ground Link Square Mall 490, Vitthalbhai Patel Road, 491, 33rd Rd, Bandra West, Mumbai, 400050',
      phone: '7045097408'
    },
    {
      name: 'MYstore',
      distance: '5.2 Km',
      address: 'Vicino Mall, Near Oshiwara Bus Depot, Off. Linking Road, Unit No 4 & 5 on Ground floor, and Unit no. 103,108, 108A (Part) on First floor, Andheri West, Mumbai, 400102',
      phone: '8655476143'
    },
    {
      name: 'MYstore',
      distance: '6.5 Km',
      address: 'Ground floor, Global One, Near Phoenix Market city, LBS Marg, Kurla West, Mumbai, 400070',
      phone: '07506703634'
    },
    {
      name: 'MYstore',
      distance: '6.9 Km',
      address: 'MYstore, UG - 41 / 42, LBS Marg, Kamani, Kurla West, Kurla, Mumbai, 400070',
      phone: '9167325593'
    },
    {
      name: 'MYstore',
      distance: '7.6 Km',
      address: 'Unit No. 1 on Ground Floor and Unit No. 1A on First Floor, 63 GMA, SV Road, Next to Patel Petrol Pump, Goregaon West, Mumbai, 400104',
      phone: '7900151149'
    },
    {
      name: 'MYstore',
      distance: '8.2 Km',
      address: 'MYstore, Cinemax, SION, Ground Floor, Sion Garage Building, Plot No. 112 Sion Koliwada Road, Near, Mumbai, 400022',
      phone: '18005727662'
    }
  ];
}
