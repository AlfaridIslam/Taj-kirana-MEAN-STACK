// beverages.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeveragesService {
  getBeverages(): Beverage[] {
    return [
      {
        title: 'Wagh Bakri',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        image: 'path/to/image1.jpg',
      },
      {
        title: 'Tata Tea Premium',
        description: 'This card has supporting text below as a natural lead-in to additional content.',
        image: 'path/to/image2.jpg',
      },
      {
        title: 'Nescafe Coffee',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
        image: 'path/to/image3.jpg',
      },
      // Add more beverage objects as needed
    ];
  }
}

interface Beverage {
  title: string;
  description: string;
  image: string;
}
