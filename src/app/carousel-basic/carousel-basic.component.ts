import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-basic',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss'],
})
export class CarouselBasicComponent {
  images = [
    'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/TV/Sept/09092025/PCP_TV_4O&Above_9Sep2025_HIYIrjFsPZ.jpg?tr=w-1200',
    'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP%20Experiment/April/29th/Laptop/Desktop/PCP_Laptop_Corei3_24April25_macqec.jpg?tr=w-1200',
    'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/CMS/LP%20Page%20Banners/2025/PCP/Wearables/July/12072025/PCP_Wearables_Samsung_12July2025_tkvdic.jpg?tr=w-1200',
  ];
}
