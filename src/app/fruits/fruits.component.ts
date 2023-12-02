import { Component,OnInit } from '@angular/core';
import { FruitsService } from '../Services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor (private fruitsService: FruitsService) {}

  ngOnInit(): void {
    this.fruits = this.fruitsService.getFruits()
  }
}

interface Fruit {
  title: string;
  description: string;
  image: string;
}
