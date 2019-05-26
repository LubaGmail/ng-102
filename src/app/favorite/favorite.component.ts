import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFav') isFav: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFav = !this.isFav; 
    this.change.emit({newValue: this.isFav});
  }
}

export interface IEventArgs {
    newValue: boolean;
}
