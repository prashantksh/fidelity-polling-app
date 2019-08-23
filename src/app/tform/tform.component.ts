import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { Observable } from 'rxjs';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  pollItem: PollItem = new PollItem();
  groups$: Observable<string[]>;

  constructor(private pollService: PollService) {
    this.groups$ = this.pollService.groups;
  }

  ngOnInit() {}

  onSubmit(item) {
    this.pollService.createPollItem(item).subscribe(response => {
      console.log('Server:', response);
    });
  }
}
