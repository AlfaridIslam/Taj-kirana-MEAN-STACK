// beverages.component.ts

import { Component, OnInit } from '@angular/core';
import { BeveragesService } from '../Services/beverages.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css'],
})
export class BeveragesComponent implements OnInit {
  beverages: Beverage[] = [];

  constructor(private beveragesService: BeveragesService) {}

  ngOnInit(): void {
    this.beverages = this.beveragesService.getBeverages();
  }
}

interface Beverage {
  title: string;
  description: string;
  image: string;
}

