import { Component,OnInit } from '@angular/core';
import { EggsService } from '../Services/eggs.service';

@Component({
  selector: 'app-eggs',
  templateUrl: './eggs.component.html',
  styleUrls: ['./eggs.component.css']
})
export class EggsComponent implements OnInit {
  eggs: Egg[] = [];

  constructor (private eggsService: EggsService) {}

  ngOnInit(): void {
    this.eggs = this.eggsService.getEggs()
  }
}

interface Egg {
  title: string;
  description: string;
  image: string;
}
