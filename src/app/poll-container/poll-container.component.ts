import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { PollService } from '../_services/poll.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  items$: Observable<PollItem[]>;
  totalCount: number;

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.items$ = this.pollService.pollItems;
    this.pollService.totalCount.subscribe(data => (this.totalCount = data));
  }

  getTotalCount(): Observable<number> {
    let total = 0;
    this.pollService.pollItems.subscribe(p => {
      p.forEach(i => {
        total += i.voteCount;
      });
    });

    return of(total);
  }

  parentHandler(val) {
    console.log('Parent Handler', val);
  }
}
