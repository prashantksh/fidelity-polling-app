import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  pollItem: PollItem = new PollItem();

  constructor() {}

  ngOnInit() {}
}
