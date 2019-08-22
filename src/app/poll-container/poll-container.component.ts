import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { PollService } from '../_services/poll.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  items$: Observable<PollItem[]>;
  totalCount$: Observable<number>;

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.items$ = this.pollService.pollItems;
    this.totalCount$ = this.pollService.total.asObservable();
  }
}
