import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  totalCount$: Observable<number>;

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.totalCount$ = this.pollService.total.asObservable();
  }
}
