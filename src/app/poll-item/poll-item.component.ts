import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PollItem } from '../../_models/poll-item.model';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-poll-item',
  templateUrl: './poll-item.component.html',
  styleUrls: ['./poll-item.component.css']
})
export class PollItemComponent implements OnInit {
  @Input() item: PollItem;
  @Output() onVoted = new EventEmitter();

  constructor(private pollService: PollService) {}

  ngOnInit() {}

  clickHandler(item) {
    this.pollService.onVote(item);
    this.onVoted.emit();
  }
}
