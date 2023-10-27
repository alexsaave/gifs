import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Gift must be provided');
    }
  }
}
