import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PollItem } from '../../_models/poll-item.model';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.css']
})
export class PollItemComponent implements OnInit {
  @Input() item: PollItem;
  @Output() onVoted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.onVoted.emit({ today: new Date() });
    this.item.voteCount++;
  }
}
