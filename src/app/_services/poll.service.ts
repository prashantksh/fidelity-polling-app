import { Injectable, DoCheck, OnChanges } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { Observable, of, BehaviorSubject, Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  // private pollItemCollection;

  total = new BehaviorSubject(this.totalCount);

  get pollItems(): Observable<PollItem[]> {
    return this.http.get('http://localhost:3000/api/get') as Observable<
      PollItem[]
    >;
  }

  get groups(): Observable<Object> {
    return this.http.get('http://localhost:3000/api/groups');
  }

  onVote(item: PollItem) {
    // const pi = this.pollItemCollection.find(p => p === item);
    // pi.voteCount++;
    this.total.next(this.totalCount);
  }

  constructor(private http: HttpClient) {}

  get totalCount() {
    let total = 0;
    // this.pollItemCollection.forEach(p => {
    //   total += +p.voteCount;
    // });
    return total;
  }
}
