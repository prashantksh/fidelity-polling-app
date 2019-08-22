import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  pollItemCollection: PollItem[] = [
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

  constructor() {}

  ngOnInit() {}

  parentHandler(val) {
    console.log('Parent Handler', val);
  }

  get totalCount(): number {
    let total = 0;
    this.pollItemCollection.forEach(p => {
      total += +p.voteCount;
    });

    return total;
  }
}
