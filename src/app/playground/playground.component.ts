import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnChanges {
  state = 'Something';
  @Input() prop;
  @Output() changeStateEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes!', changes);
  }

  handler(args) {
    console.log(args);
  }

  clickHandler() {
    this.changeStateEvent.emit();
    console.log('clicked');
  }
}
