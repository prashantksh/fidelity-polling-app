import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  pollForm: FormGroup;
  validTitle = 'My Title';

  constructor() {
    this.pollForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl(
        '',
        [Validators.required, Validators.minLength(5)],
        this.validateTitle.bind(this)
      ),
      description: new FormControl(),
      group: new FormControl('Development'),
      imageUrl: new FormControl()
    });
  }

  ngOnInit() {}

  validateTitle(ctrl: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const val = ctrl.value;
        if (val === this.validTitle) {
          // Success case
          resolve(null);
        } else {
          resolve({ title_error: true });
        }
      }, 2000);
    });
  }
}
