import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;

  constructor() {}

  ngOnInit() {
    if (!this.hero) throw new Error('Hero property is required');
  }
}
