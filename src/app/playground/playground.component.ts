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
export class PlaygroundComponent implements OnInit, DoCheck {
  state = 'Something';
  @Input() prop;
  @Output() changeStateEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log('OnInit');
  }

  ngDoCheck(): void {
    console.log('checked');
  }

  handler(args) {
    console.log(args);
  }

  clickHandler() {
    this.changeStateEvent.emit();
    console.log('clicked');
  }

  getCssClasses(): Object {
    return {
      'text-success': true,
      'text-danger': false,
      'font-weight-bold': true
    };
  }

  getStyles(): Object {
    return {
      color: '#5427db',
      'font-size': '45px'
    };
  }
}
