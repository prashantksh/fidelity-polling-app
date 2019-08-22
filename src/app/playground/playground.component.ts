import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnChanges, AfterViewInit {
  state = 'Something';
  @ViewChild('message', { static: false }) el: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // this.el.nativeElement.value = 'Input Field';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change!');
  }

  handler(args) {
    console.log(args);
  }
}
