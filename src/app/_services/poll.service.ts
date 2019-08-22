import { Injectable, DoCheck, OnChanges } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { Observable, of, BehaviorSubject, Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private pollItemCollection: PollItem[] = [
    {
      title: 'Foosball',
      description: 'Foosball description',
      imageUrl:
        'https://www.kickfoosballtables.com/wp-content/uploads/2018/08/KICK-Conquest-Foosball-Table-Review.jpg',
      isPremium: true,
      voteCount: 0
    },
    {
      title: 'Gym',
      description: 'Gym description',
      imageUrl:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      isPremium: false,
      voteCount: 0
    },
    {
      title: 'Snack Corner',
      description: 'Snack corner description',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/9140LD0I2RL._SL1500_.jpg',
      isPremium: true,
      voteCount: 0
    }
  ];

  total = new BehaviorSubject(this.totalCount);

  get pollItems(): Observable<PollItem[]> {
    return of(this.pollItemCollection);
  }

  onVote(item: PollItem) {
    const pi = this.pollItemCollection.find(p => p === item);
    pi.voteCount++;
    this.total.next(this.totalCount);
  }

  constructor() {}

  get totalCount() {
    let total = 0;
    this.pollItemCollection.forEach(p => {
      total += +p.voteCount;
    });
    return total;
  }
}
