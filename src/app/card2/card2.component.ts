import { Component, OnInit } from '@angular/core';

interface Product {
  img: string;
  cardTitle: string;
  cardText: string;
}

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  productsArray: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.productsArray = [
      {
        img: "assets/images/wp3106251-eat-your-vegetables-wallpapers.jpg",
        cardTitle: 'FRUITS & VEGETABLES',
        cardText: 'Potato, onions, garlic, ginger etc'
      },
      {
        img: "assets/images/wp7695180-cooking-oil-wallpapers.jpg",
        cardTitle: 'FOODGRAINS,OIL & MASALA',
        cardText: 'Wheat, Rice, cooking oil, masala etc'
      },
      {
        img: "assets/images/wp4424214-snack-wallpapers.jpg",
        cardTitle: 'SNACKS',
        cardText: 'Maggi, Biscuits, Sweets etc'
      },
      {
        img: "assets/images/wp7137319-beverages-wallpapers.jpg",
        cardTitle: 'BEVERAGES',
        cardText: 'Cold drinks, tea, coffee'
      },
      {
        img: "assets/images/wp2034290-milk-wallpapers.jpg",
        cardTitle: 'EGGS,BAKERY & DAIRY',
        cardText: 'Milk, eggs, bread etc'
      }
    ];
  }
}
