import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  pollForm: FormGroup;

  constructor() {
    this.pollForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl(),
      group: new FormControl('Development'),
      imageUrl: new FormControl()
    });
  }

  ngOnInit() {}
}
