import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;

    this.change.emit({newValue: this.isActive});
  } 

}
