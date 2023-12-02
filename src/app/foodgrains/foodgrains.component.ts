import { Component,OnInit } from '@angular/core';
import { FoodgrainsService } from '../Services/foodgrains.service';

@Component({
  selector: 'app-foodgrains',
  templateUrl: './foodgrains.component.html',
  styleUrls: ['./foodgrains.component.css']
})
export class FoodgrainsComponent implements OnInit {
  foodgrains: Foodgrain[] = [];

  constructor (private foodgrainsService: FoodgrainsService) {}

  ngOnInit(): void {
    this.foodgrains = this.foodgrainsService.getFoodgrains()
  }
}

interface Foodgrain {
  title: string;
  description: string;
  image: string;
}
