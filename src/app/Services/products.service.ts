// products.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductsByCategory(category: string): any[] {
    // Implement logic to return products based on the category
    // For example:
    if (category === 'fruits') {
      return [
        {
          title: 'Wagh Bakri',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'assets/images/image1.jpg',
        },
        {
          title: 'Tata Tea Premium',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          image: 'assets/images/image2.jpg',
        },
        {
          title: 'Nescafe Coffee',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          image: 'assets/images/image3.jpg',
        },
        // Add more fruit objects as needed
      ];
    } else if (category === 'foodgrains') {
      return [
        {
          title: 'Wagh Bakri',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'assets/images/image1.jpg',
        },
        {
          title: 'Tata Tea Premium',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          image: 'assets/images/image2.jpg',
        },
        {
          title: 'Nescafe Coffee',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          image: 'assets/images/image3.jpg',
        },
        // Add more foodgrains objects as needed
      ];
    } else if (category === 'beverages') {
      return [
        {
          title: 'Wagh Bakri',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'assets/images/image1.jpg',
        },
        {
          title: 'Tata Tea Premium',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          image: 'assets/images/image2.jpg',
        },
        {
          title: 'Nescafe Coffee',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          image: 'assets/images/image3.jpg',
        },
        // Add more beverage objects as needed
      ];
    } else if (category === 'eggs') {
      return [
        {
          title: 'Wagh Bakri',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'assets/images/image1.jpg',
        },
        {
          title: 'Tata Tea Premium',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          image: 'assets/images/image2.jpg',
        },
        {
          title: 'Nescafe Coffee',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          image: 'assets/images/image3.jpg',
        },
        // Add more egg objects as needed
      ];
    } else if (category === 'snacks') {
      return [
        {
          title: 'Wagh Bakri',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'assets/images/image1.jpg',
        },
        {
          title: 'Tata Tea Premium',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          image: 'assets/images/image2.jpg',
        },
        {
          title: 'Nescafe Coffee',
          description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
          image: 'assets/images/image3.jpg',
        },
        // Add more snack objects as needed
      ];
    }
    
    // Return an empty array if the category is not recognized
    return [];
  }
}
